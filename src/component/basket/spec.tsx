import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { getVacancyMock } from '@root/mock';

import BasketTotals from '@app/component/basket-totals';
import VacancyDetails from '@app/component/vacancy/details';
import Basket from './';

const mockedVacancy = getVacancyMock();

function getComponent(vacancy = mockedVacancy) {
  return (
    <Basket
      vacancy={vacancy}
    />
  );
}

describe('the basket component', () => {
  let instance: ShallowWrapper<Basket>;

  function getSubmitButton(wrapper: ShallowWrapper<Basket>) {
    return wrapper.find('button[type="submit"]');
  }

  beforeEach(() => {
    instance = shallow(getComponent());
  });

  it('should display the details of the provided vacancy', () => {
    expect(instance.find(VacancyDetails).get(0).props).toEqual({
      vacancy: mockedVacancy
    });
  });

  it('should display the total discount and total price of the selected vacancy', () => {
    expect(instance.find(BasketTotals).get(0).props).toEqual({
      vacancies: [mockedVacancy]
    });
  });

  it('should display a button which allows the user to continue to checkout the chosen vacancy', () => {
    expect(getSubmitButton(instance).text()).toBe('Bestellen');
  });

  describe('when no vacancy is selected', () => {
    beforeEach(() => {
      instance = shallow(getComponent(null));
    });

    it('should mention that a vacancy needs to be selected before being to able to checkout', () => {
      expect(instance.text()).toContain('Selecteer één van de vacaturepakketten uit de lijst');
    });

    it('should not display the total discount and total price of the selected vacancy', () => {
      expect(instance.find(BasketTotals).exists()).toBe(false);
    });

    it('should not display a button which allows the user to continue to checkout the chosen vacancy', () => {
      expect(getSubmitButton(instance).exists()).toBe(false);
    });
  });

});
