import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import VacanciesPage from '@app/component/page/vacancies';
import App from './';

function getComponent() {
  return (
    <App />
  );
}

describe('the app component', () => {
  let instance: ShallowWrapper<App>;

  beforeEach(() => {
    instance = shallow(getComponent());
  });

  it('should wrap all content within a container', () => {
    expect(instance.hasClass('container')).toBe(true);
  });

  it('should display the vacancies page', () => {
    expect(instance.contains(<VacanciesPage />)).toBe(true);
  });

});
