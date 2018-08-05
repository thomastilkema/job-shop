jest.mock('react-dom');

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from '@app/component/app';

describe('starting the application', () => {
  jest.spyOn(ReactDOM, 'render');

  it('should initialize the app component', () => {
    expect(ReactDOM.render).not.toHaveBeenCalled();

    require('./');

    expect(ReactDOM.render).toHaveBeenCalledWith(
      <App />,
      document.getElementById('js-app')
    );
  });
});
