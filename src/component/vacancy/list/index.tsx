import * as React from 'react';

import { IVacancy } from '@app/interface';

import VacancyListItem from '@app/component/vacancy/list-item';

interface IProps {
  vacancies: IVacancy[];
}

class Component extends React.Component<IProps, {}> {

  public render() {
    if (this.props.vacancies.length === 0) {
      return <p>We hebben op dit moment helaas geen beschikbare vacaturepakketten</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th scope="col" colSpan={2}>Abonnement</th>
            <th scope="col">Periode</th>
            <th scope="col">Normale prijs</th>
            <th scope="col">Prijs</th>
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
          vacancy={vacancy}
        />
      )
    );
  }
}

export default Component;
