import * as React from 'react';

import { IVacancy } from '@app/interface';
import { getVacanciesMock } from '@root/mock';

import Basket from '@app/component/basket';
import VacanciesList from '@app/component/vacancy/list';

interface IState {
  vacancies: IVacancy[];
}

class Component extends React.Component<{}, IState> {

  constructor(props: object) {
    super(props);

    this.state = {
      vacancies: getVacanciesMock()
    };
  }

  public render() {
    return (
      <div className="column-wrapper">
        <div className="column">
          <h1>Online vacatures</h1>

          <h2>Introductiepakketten</h2>

          <VacanciesList
            vacancies={this.state.vacancies}
          />
        </div>

        <div className="column column--aside">
          <Basket
            vacancy={this.state.vacancies[0]}
          />
        </div>
      </div>
    );
  }

}

export default Component;
