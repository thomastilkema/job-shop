import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { getVacancyMock } from '@root/mock';

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
    expect(instance.text()).toContain('Vacancy details here');
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

    it('should not display a button which allows the user to continue to checkout the chosen vacancy', () => {
      expect(getSubmitButton(instance).exists()).toBe(false);
    });
  });

});
