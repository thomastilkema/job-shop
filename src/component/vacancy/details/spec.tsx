import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { getVacancyMock } from '@root/mock';

import VacancyDetails from './';

const mockedVacancy = getVacancyMock();

function getComponent(vacancy = mockedVacancy) {
  return (
    <VacancyDetails
      vacancy={vacancy}
    />
  );
}

describe('the vacancy-details component', () => {
  let instance: ShallowWrapper<VacancyDetails>;

  beforeEach(() => {
    instance = shallow(getComponent());
  });

  it('should display the image of the provided vacancy', () => {
    const imageElement = instance.find('img[src="mocked_vacancy_image_url"]');
    expect(imageElement.exists()).toBe(true);
  });

  it('should display for what period of time the vacancy will be listed', () => {
    expect(instance.find('ul').text()).toContain('60 dagen online');
  });

  it('should display all features in the list', () => {
    const list = instance.find('ul');
    const listText = list.text();

    // Two features plus the period (see above)
    expect(list.children()).toHaveLength(3);

    expect(listText).toContain('mocked_vacancy_feature#1');
    expect(listText).toContain('mocked_vacancy_feature#2');
  });

});
