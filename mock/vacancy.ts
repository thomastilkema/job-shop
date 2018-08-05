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

export function getVacanciesMock() {
  return [
    getVacancyMock({
      name: 'mocked_vacancy_name#1',
      period: 60,
      originalPrice: 40,
      discount: 10,
      image: 'mocked_vacancy_image_url#1',
      features: [
        'mocked_vacancy_feature#1.1',
        'mocked_vacancy_feature#1.2'
      ]
    }),

    getVacancyMock({
      name: 'mocked_vacancy_name#2',
      period: 30,
      originalPrice: 150,
      discount: 25,
      image: 'mocked_vacancy_image_url#2',
      features: [
        'mocked_vacancy_feature#2.1',
        'mocked_vacancy_feature#2.2'
      ]
    })
  ];
}
