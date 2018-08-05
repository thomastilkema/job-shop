import * as React from 'react';

import { IVacancy } from '@app/interface';

import Basket from '@app/component/basket';
import VacanciesList from '@app/component/vacancy/list';
import { getVacancies } from '@app/utility';

interface IState {
  vacancies: IVacancy[];
}

class Component extends React.Component<{}, IState> {

  constructor(props: object) {
    super(props);

    this.state = {
      vacancies: []
    };
  }

  public componentDidMount() {
    this.retrieveVacancies();
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

  private async retrieveVacancies() {
    const vacancies = await getVacancies();

    this.setState({ vacancies });
  }

}

export default Component;
