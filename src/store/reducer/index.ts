import { IAppState } from '@app/interface';
import { IVacancyActionCheckout, storeActions } from '@app/store/action';

const initialState: IAppState = {
  checkoutVacancy: null
};

export function updateState(
  state = initialState,
  action: IVacancyActionCheckout
): IAppState {
  switch (action.type) {
    case storeActions.CHECKOUT_VACANCY:
      return {
        ...state,
        checkoutVacancy: action.checkoutVacancy
      };

    default:
      return state;
  }
}
