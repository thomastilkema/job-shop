jest.mock('@app/utility');
jest.mock('@app/store');
jest.mock('@app/store/action');

import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { store } from '@app/store';
import * as storeActions from '@app/store/action';
import * as utility from '@app/utility';
import { getVacanciesMock } from '@root/mock';

const mockedVacancies = getVacanciesMock();
const mockedSelectedVacancy = { ...mockedVacancies[0] };

import Basket from '@app/component/basket';
import VacanciesList from '@app/component/vacancy/list';
import VacanciesPage from './';

const componentProperties = {
  history: {
    push: jest.fn()
  }
};

function getComponent() {
  return (
    <VacanciesPage
      {...componentProperties as any}
    />
  );
}

function getBasket(wrapper: ShallowWrapper<VacanciesPage>) {
  return wrapper.find(Basket).get(0);
}

async function selectVacancy(wrapper: ShallowWrapper<VacanciesPage>) {
  // I'd rather actually mocked clicking a vacancy but I couldn't get it to work
  (wrapper.instance() as any).setSelectedVacancy(mockedSelectedVacancy);
  await wrapper.update();
}

describe('the vacancies page component', () => {
  let instance: ShallowWrapper<VacanciesPage>;
  let getStateSpy: jest.SpyInstance;
  let getVacanciesSpy: jest.SpyInstance;

  beforeEach(() => {
    getStateSpy = jest.spyOn(store, 'getState');
    getVacanciesSpy = jest.spyOn(utility, 'getVacancies');

    getStateSpy.mockReturnValue({
      checkoutVacancy: {
        mocked: 'checkout_vacancy_from_state'
      }
    });
    getVacanciesSpy.mockReturnValue(Promise.resolve(mockedVacancies));

    instance = shallow(getComponent());
  });

  it('should update the browser title', () => {
    expect(document.title).toBe('Vacaturepakketten');
  });

  it('should tell what the main content of this page is about', () => {
    expect(instance.find('h1').text()).toContain('Online vacatures');
  });

  it('should tell what type of vacancies this page will show', () => {
    expect(instance.find('h2').text()).toContain('Introductiepakketten');
  });

  describe('the list of vacancies', () => {
    function getVacanciesList(wrapper: ShallowWrapper<VacanciesPage>) {
      return wrapper.find(VacanciesList).get(0);
    }

    it('should be provided with an empty list by default', () => {
      expect(getVacanciesList(instance).props).toEqual(
        jasmine.objectContaining({
          vacancies: []
        })
      );
    });

    it('should in the end be provided with the vacancies coming from the backend', async () => {
      // Wait for vacancies response to resolve
      await instance.update();

      expect(getVacanciesList(instance).props).toEqual(
        jasmine.objectContaining({
          vacancies: mockedVacancies
        })
      );
    });
  });

  it('it should by default set the vacancy which the user wants to checkout as the selected vacancy', () => {
    expect(getBasket(instance).props).toEqual(
      jasmine.objectContaining({
        vacancy: {
          mocked: 'checkout_vacancy_from_state'
        }
      })
    );
  });

  describe('when selecting a vacancy', () => {
    it('should inform the basket about the selected vacancy', async () => {
      await selectVacancy(instance);

      expect(getBasket(instance).props).toEqual(
        jasmine.objectContaining({
          vacancy: mockedSelectedVacancy
        })
      );
    });
  });

  describe('when hitting the button to checkout the selected vacancy', () => {
    let storeActionsSpy: jest.SpyInstance;

    beforeEach(async () => {
      storeActionsSpy = jest.spyOn(storeActions, 'checkoutVacancy');
      jest.spyOn(store, 'dispatch');

      storeActionsSpy.mockReturnValue({
        mocked: 'return_value_of_action',
        type: 'mocked_type'
      });

      componentProperties.history.push.mockClear();

      // Make sure a vacancy is selected
      await selectVacancy(instance);

      // Submit the form
      instance.find('form').simulate('submit', { preventDefault: () => ({}) });
    });

    it('should update the app state with the selected vacancy', () => {
      expect(storeActionsSpy).toHaveBeenCalledWith(mockedSelectedVacancy);
      expect(store.dispatch).toHaveBeenCalledWith({
        mocked: 'return_value_of_action',
        type: 'mocked_type'
      });
    });

    it('should redirect the user to the confirmation page', () => {
      expect(componentProperties.history.push).toHaveBeenCalledWith('/bevestigen');
    });
  });

});
