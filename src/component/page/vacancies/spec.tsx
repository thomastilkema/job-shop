import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

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

  it('should have an area which displays the vacancies', () => {
    expect(instance.text()).toContain('Hier zullen de vacaturepakketten worden getoond');
  });

  it('should have an area which displays the shopping basket', () => {
    expect(instance.text()).toContain('Hier zal de winkelwagen worden getoond');
  });

});
