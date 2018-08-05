import * as React from 'react';

import Basket from '@app/component/basket';
import VacanciesList from '@app/component/vacancy/list';
import { IVacancy } from '@app/interface';
import { store } from '@app/store';
import { checkoutVacancy } from '@app/store/action';
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

    this.checkoutVacancy = this.checkoutVacancy.bind(this);
    this.setSelectedVacancy = this.setSelectedVacancy.bind(this);
  }

  public componentDidMount() {
    document.title = 'Vacaturepakketten';

    this.retrieveVacancies();
  }

  public render() {
    const selectedVacancyId = this.getSelectedVacancyId();

    return (
      <form className="column-wrapper" onSubmit={this.checkoutVacancy}>
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
      </form>
    );
  }

  private checkoutVacancy(event: React.FormEvent) {
    event.preventDefault();

    store.dispatch(checkoutVacancy(this.state.selectedVacancy));
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
