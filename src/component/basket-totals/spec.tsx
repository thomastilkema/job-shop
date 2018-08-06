import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { getVacancyMock } from '@root/mock';

import BasketTotals from './';

const mockedVacancies = [
  getVacancyMock({
    name: 'mocked_vacancy_name#1',
    originalPrice: 40,
    discount: 10
  }),

  getVacancyMock({
    name: 'mocked_vacancy_name#2',
    originalPrice: 70,
    discount: 15
  })
];

function getComponent(vacancies = mockedVacancies) {
  return (
    <BasketTotals
      vacancies={vacancies}
    />
  );
}

function getTableCellText(wrapper: ShallowWrapper<BasketTotals>, rowIndex: number, cellIndex: number) {
  return wrapper.find('tr').at(rowIndex).childAt(cellIndex).text();
}

describe('the basket component', () => {
  let instance: ShallowWrapper<BasketTotals>;

  beforeEach(() => {
    instance = shallow(getComponent());
  });

  it('should display the name of each provided vacancy', () => {
    expect(getTableCellText(instance, 2, 0)).toBe('mocked_vacancy_name#1');
    expect(getTableCellText(instance, 3, 0)).toBe('mocked_vacancy_name#2');
  });

  it('should display the original price of each provided vacancy', () => {
    expect(getTableCellText(instance, 2, 1)).toBe('€ 40');
    expect(getTableCellText(instance, 3, 1)).toBe('€ 70');
  });

  it('should display the total discount price', () => {
    expect(getTableCellText(instance, 0, 1)).toBe('- € 25');
  });

  it('should display the total price', () => {
    expect(getTableCellText(instance, 1, 1)).toBe('€ 85');
  });

});
