jest.mock('redux');
import * as redux from 'redux';
import { updateState } from './reducer';

describe('the store which allows to read and write the state of the app', () => {
  it('should hold the function which allows to update the vacancy the user wants to checkout', () => {
    const createStoreSpy = jest.spyOn(redux, 'createStore');
    createStoreSpy.mockReturnValue('mocked_redux_store');

    const store = require('./').store;

    expect(createStoreSpy).toHaveBeenCalledWith(updateState);
    expect(store).toBe('mocked_redux_store');
  });
});
