import * as React from 'react';

import './style.css';

import { IVacancy, selectVacancyFunction } from '@app/interface';

import VacancyListItem from '@app/component/vacancy/list-item';

interface IProps {
  onSelectVacancy: selectVacancyFunction;
  selectedVacancyId: number;
  vacancies: IVacancy[];
}

class Component extends React.Component<IProps, {}> {

  public render() {
    if (this.props.vacancies.length === 0) {
      return <p>We hebben op dit moment helaas geen beschikbare vacaturepakketten</p>;
    }

    return (
      <table className="table table--vacancies-list">
        <thead>
          <tr>
            <th scope="col" colSpan={2}>Abonnement</th>
            <th className="text-right" scope="col">Periode</th>
            <th className="text-right" scope="col">Normale prijs</th>
            <th className="text-right" scope="col">Prijs</th>
          </tr>
        </thead>
        <tbody>
          {this.renderVacancies()}
        </tbody>
      </table>
    );
  }

  private renderVacancies() {
    return this.props.vacancies.map((vacancy, index) =>
      (
        <VacancyListItem
          key={index}
          isSelected={this.isSelected(vacancy)}
          onSelectVacancy={this.props.onSelectVacancy}
          vacancy={vacancy}
        />
      )
    );
  }

  private isSelected(vacancy: IVacancy) {
    return Boolean(this.props.selectedVacancyId) && this.props.selectedVacancyId === vacancy.id;
  }
}

export default Component;
