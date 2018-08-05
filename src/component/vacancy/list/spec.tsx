import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { getVacanciesMock } from '@root/mock';

import VacancyListItem from '@app/component/vacancy/list-item';
import VacancyList from './';

const mockedVacancies = getVacanciesMock();

function getComponent(vacancies = mockedVacancies) {
  return (
    <VacancyList
      vacancies={vacancies}
    />
  );
}

describe('the vacancy-list-item component', () => {
  let instance: ShallowWrapper<VacancyList>;

  beforeEach(() => {
    instance = shallow(getComponent());
  });

  it('should display table headings to make clear what each value in the overview means', () => {
    const tableHeadingRow = instance.find('thead tr').at(0);

    expect(tableHeadingRow.find('th').at(0).text()).toBe('Abonnement');
    expect(tableHeadingRow.find('th').at(1).text()).toBe('Periode');
    expect(tableHeadingRow.find('th').at(2).text()).toBe('Normale prijs');
    expect(tableHeadingRow.find('th').at(3).text()).toBe('Prijs');
  });

  it('should display the amount of provided vacancies', () => {
    expect(instance.find(VacancyListItem)).toHaveLength(2);
  });

  describe('when no vacancies are provided', () => {
    beforeEach(() => {
      instance = shallow(getComponent([]));
    });

    it('should mention that no vacancies are currently availabe', () => {
      expect(instance.text()).toContain('We hebben op dit moment helaas geen beschikbare vacaturepakketten');
    });
  });

});
