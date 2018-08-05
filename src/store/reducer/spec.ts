import { storeActions } from '@app/store/action';
import { getVacancyMock } from '@root/mock';
import { updateState } from './';

const mockedVacancy = getVacancyMock();

describe('the function used to update and return the state of the app', () => {
  it('should return the state with the vacancy to checkout when provided with the right arguments', () => {
    const properAction = {
      type: storeActions.CHECKOUT_VACANCY,
      checkoutVacancy: mockedVacancy
    };

    expect(updateState(undefined, properAction)).toEqual({
      checkoutVacancy: mockedVacancy
    });
  });

  it('should return the provided state when the arguments are unknown', () => {
    expect(updateState(undefined, {} as any)).toEqual({
      checkoutVacancy: null
    });
  });
});
