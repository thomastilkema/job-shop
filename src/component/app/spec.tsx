import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

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

  it('should tell that this is the main app component', () => {
    expect(instance.text()).toContain('This is the main app');
  });

});
