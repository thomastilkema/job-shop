import { IVacancy } from '@app/interface';

const defaultMock: IVacancy = {
  id: 1,
  name: 'mocked_vacancy_name',
  period: 60,
  originalPrice: 40,
  discount: 10,
  image: 'mocked_vacancy_image_url',
  features: [
    'mocked_vacancy_feature#1',
    'mocked_vacancy_feature#2'
  ]
};

export function getVacancyMock(properties: Partial<IVacancy> = defaultMock): IVacancy {
  return {
    ...defaultMock,
    ...properties
  };
}
