import { getVacancyMock } from '@root/mock';
import { checkoutVacancy, storeActions } from './';

const mockedVacancy = getVacancyMock();

describe('the function used to update the state with the vacancy to checkout', () => {
  it('should return the action which let\'s the redux store set the vacancy to checkout', () => {
    expect(checkoutVacancy(mockedVacancy)).toEqual({
      type: storeActions.CHECKOUT_VACANCY,
      checkoutVacancy: mockedVacancy
    });
  });
});
