export interface IVacancy {
  discount: number;
  features: string[];
  id: number;
  image: string;
  name: string;
  originalPrice: number;
  period: number;
}

export type selectVacancyFunction = (vacancy: IVacancy) => void;
