import * as React from 'react';

import { IVacancy } from '@app/interface';

import Basket from '@app/component/basket';
import VacanciesList from '@app/component/vacancy/list';
import { getVacancies } from '@app/utility';

interface IState {
  selectedVacancy: IVacancy;
  vacancies: IVacancy[];
}

class Component extends React.Component<{}, IState> {

  constructor(props: object) {
    super(props);

    this.state = {
      selectedVacancy: null,
      vacancies: []
    };

    this.setSelectedVacancy = this.setSelectedVacancy.bind(this);
  }

  public componentDidMount() {
    document.title = 'Vacaturepakketten';

    this.retrieveVacancies();
  }

  public render() {
    const selectedVacancyId = this.getSelectedVacancyId();

    return (
      <div className="column-wrapper">
        <div className="column">
          <h1>Online vacatures</h1>

          <h2>Introductiepakketten</h2>

          <VacanciesList
            onSelectVacancy={this.setSelectedVacancy}
            selectedVacancyId={selectedVacancyId}
            vacancies={this.state.vacancies}
          />
        </div>

        <div className="column column--aside">
          <Basket
            vacancy={this.state.selectedVacancy}
          />
        </div>
      </div>
    );
  }

  private async retrieveVacancies() {
    const vacancies = await getVacancies();

    this.setState({ vacancies });
  }

  private setSelectedVacancy(vacancy: IVacancy) {
    this.setState({
      selectedVacancy: vacancy
    });
  }

  private getSelectedVacancyId() {
    if (!this.state.selectedVacancy) {
      return null;
    }

    return this.state.selectedVacancy.id;
  }

}

export default Component;
