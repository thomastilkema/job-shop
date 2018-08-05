import axios, { AxiosResponse } from 'axios';

import { IVacancy } from '@app/interface';

interface IVacanciesData {
  vacancies: IVacancy[];
}

export const getVacancies = async (): Promise<IVacancy[]> => {
  try {
    const response: AxiosResponse<IVacanciesData> = await axios.request({
      url: '/data/vacancies.json'
    });
    return response.data.vacancies;
  } catch (error) {
    throw new Error('An error occurred while retrieving vacancies');
  }
};
