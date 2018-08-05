import { createStore } from 'redux';

import { updateState } from './reducer';

export const store = createStore(updateState);
