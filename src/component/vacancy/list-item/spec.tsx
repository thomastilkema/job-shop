import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { getVacancyMock } from '@root/mock';

import VacancyListItem from './';

const mockedVacancy = getVacancyMock();

function getComponent() {
  return (
    <VacancyListItem
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

});
