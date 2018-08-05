import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { selectVacancyFunction } from '@app/interface';
import { getVacancyMock } from '@root/mock';

import VacancyListItem from './';

const mockedVacancy = getVacancyMock();

function getComponent(isSelected = false, onSelectVacancyFunction: selectVacancyFunction = null) {
  return (
    <VacancyListItem
      isSelected={isSelected}
      onSelectVacancy={onSelectVacancyFunction}
      vacancy={mockedVacancy}
    />
  );
}

describe('the vacancy-list-item component', () => {
  let instance: ShallowWrapper<VacancyListItem>;
  let instanceText: string;

  beforeEach(() => {
    instance = shallow(getComponent());
    instanceText = instance.text();
  });

  it('should display the name of the provided vacancy', () => {
    expect(instanceText).toContain('mocked_vacancy_name');
  });

  it('should display how long the provided vacancy will be visible online', () => {
    expect(instanceText).toContain('60');
  });

  it('should display the original price of the vacancy', () => {
    expect(instanceText).toContain('€ 40');
  });

  it('should display the actual price of the vacancy', () => {
    expect(instanceText).toContain('€ 30');
  });

  describe('when the current vacancy is not the vacancy which the user selected', () => {
    it('should make it visually clear that the current vacancy is not the selected vacancy', () => {
      expect(instance.hasClass('table__active')).toBe(false);
    });
  });

  describe('when the current vacancy is the same vacancy as the vacancy which the user selected', () => {
    beforeEach(() => {
      instance = shallow(getComponent(true));
    });

    it('should make it visually clear that the current vacancy is the selected vacancy', () => {
      expect(instance.hasClass('table__active')).toBe(true);
    });
  });

  describe('when selecting a vacancy', () => {
    let onSelectVacancyFunction: jest.Mock;

    beforeEach(() => {
      onSelectVacancyFunction = jest.fn();
      instance = shallow(getComponent(false, onSelectVacancyFunction));
    });

    it('should inform the parent component about the selected vacancy', () => {
      expect(onSelectVacancyFunction).not.toHaveBeenCalled();

      instance.find('tr').simulate('click');

      expect(onSelectVacancyFunction).toHaveBeenCalledWith(mockedVacancy);
    });
  });

  describe('when clicking the radio button itself', () => {
    it('should do nothing because selecting this vacancy is handled by clicking the row', () => {
      const cancelEventFunction = jest.fn();
      instance.find('input[type="radio"]').simulate('change', { stopPropagation: cancelEventFunction });

      expect(cancelEventFunction).toHaveBeenCalledWith();
    });
  });

});
