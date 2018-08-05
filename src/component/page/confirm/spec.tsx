jest.mock('@app/store');

import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { store } from '@app/store';

import { getVacancyMock } from '@root/mock';

import VacancyDetails from '@app/component/vacancy/details';
import ConfirmationPage from './';

const mockedVacancy = getVacancyMock();

function getComponent() {
  return (
    <ConfirmationPage />
  );
}

describe('the confirmation page component', () => {
  let instance: ShallowWrapper<ConfirmationPage>;
  let getStateSpy: jest.SpyInstance;

  beforeEach(() => {
    getStateSpy = jest.spyOn(store, 'getState');
  });

  beforeEach(() => {
    getStateSpy.mockReturnValue({
      checkoutVacancy: mockedVacancy
    });
    instance = shallow(getComponent());
  });

  it('should update the browser title', () => {
    expect(document.title).toBe('Bevestig je aankoop');
  });

  it('should display the vacancy details of the vacancy which the user wants to checkout', () => {
    expect(instance.find(VacancyDetails).get(0).props).toEqual({
      vacancy: mockedVacancy
    });
  });

  it('should display the possibility to return to the vacancy overview page to select another vacancy', () => {
    expect(instance.contains(
      <Link to="/">de pagina met vacaturepakketten</Link>)
    ).toBe(true);
  });

  it('should provide the possibility to continue the checkout process', () => {
    expect(instance.find('button').text()).toBe('Ga door');
  });

  describe('when the user did not yet select a vacancy to checkout', () => {
    beforeEach(() => {
      getStateSpy.mockReturnValue({
        checkoutVacancy: null
      });
      instance = shallow(getComponent());
    });

    it('should mention that the user needs to select a vacancy from the vacancy overview page', () => {
      expect(instance.text()).toContain('Het lijkt erop dat je nog geen vacaturepakket hebt gekozen dat je wilt aanschaffen');
      expect(instance.contains(<Link to="/">Selecteer een vacaturepakket</Link>)).toBe(true);
    });
  });

});
