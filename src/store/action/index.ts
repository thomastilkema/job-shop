import { IVacancy } from '@app/interface';

export enum storeActions {
  CHECKOUT_VACANCY = 'CHECKOUT_VACANCY'
}

export interface IVacancyActionCheckout {
  type: storeActions.CHECKOUT_VACANCY;
  checkoutVacancy: IVacancy;
}

export function checkoutVacancy(vacancy: IVacancy): IVacancyActionCheckout {
  return { type: storeActions.CHECKOUT_VACANCY, checkoutVacancy: vacancy };
}
