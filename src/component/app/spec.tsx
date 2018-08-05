import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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

  it('should have support for routes', () => {
    expect(instance.find(BrowserRouter).exists()).toBe(true);
  });

  it('should add a route for the vacancies page', () => {
    expect(instance.contains(<Route exact={true} path="/" component={VacanciesPage} />)).toBe(true);
  });

});
