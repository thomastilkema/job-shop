import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import Basket from '@app/component/basket';
import VacanciesList from '@app/component/vacancy/list';
import VacanciesPage from './';

function getComponent() {
  return (
    <VacanciesPage />
  );
}

describe('the vacancies page component', () => {
  let instance: ShallowWrapper<VacanciesPage>;

  beforeEach(() => {
    instance = shallow(getComponent());
  });

  it('should tell what the main content of this page is about', () => {
    expect(instance.find('h1').text()).toContain('Online vacatures');
  });

  it('should tell what type of vacancies this page will show', () => {
    expect(instance.find('h2').text()).toContain('Introductiepakketten');
  });

  it('should display a list of vacancies', () => {
    expect(instance.find(VacanciesList).exists()).toBe(true);
  });

  it('should display the shopping basket', () => {
    expect(instance.find(Basket).exists()).toBe(true);
  });

});
