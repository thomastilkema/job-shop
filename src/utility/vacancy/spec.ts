jest.mock('axios');

import axios from 'axios';

import { getVacanciesMock } from '@root/mock';
import { getVacancies } from './';

const mockedVacanciesResponse = getVacanciesMock();

describe('the function which retrieves the vacancies', () => {
  let axiosRequestSpy: jest.SpyInstance;

  beforeEach(() => {
    axiosRequestSpy = jest.spyOn(axios, 'request');

    axiosRequestSpy.mockImplementation(
      () => Promise.resolve({
        data: {
          vacancies: mockedVacanciesResponse
        }
      })
    );
  });

  it('should make a request to the right endpoint', async () => {
    await getVacancies();

    expect(axiosRequestSpy).toHaveBeenCalledWith({
      url: '/data/vacancies.json'
    });
  });

  it('should return the vacancies from the endpoint', async () => {
    const vacancies = await getVacancies();

    expect(vacancies).toBe(mockedVacanciesResponse);
  });

  describe('when an error occurs during the request', () => {
    beforeEach(() => {
      axiosRequestSpy.mockReturnValue(Promise.reject({ message: 'moi' }));
    });

    it('should throw an error', async () => {
      // We need a bit of trickery to let Jest handle thrown errors
      try {
        await getVacancies();
        // This error will be thrown when getVacancies() resolves. It will result in this test to fail
        throw new Error('Jest: test did not throw');
      } catch (error) {
        expect(() => {
          throw error;
        }).toThrowError('An error occurred while retrieving vacancies');
      }
    });
  });
});
