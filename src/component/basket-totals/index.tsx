import * as React from 'react';

import { IVacancy } from '@app/interface';

import VacancyDetails from '@app/component/vacancy/details';

interface IProps {
  vacancies: IVacancy[];
}

class Component extends React.Component<IProps, {}> {

  public render() {
    return (
      <table className="table">
        <tfoot>
          <tr>
            <th scope="row">Korting</th>
            <td className="text-right">&euro; - {this.getTotalDiscount()}</td>
          </tr>
          <tr>
            <th scope="row">Totaal</th>
            <td className="text-right">&euro; {this.getTotalPrice()}</td>
          </tr>
        </tfoot>
        <tbody>
          {this.renderVacancies()}
        </tbody>
      </table>
    );
  }

  private renderVacancies() {
    return this.props.vacancies.map((vacancy, index) => (
      <tr key={index}>
        <th scope="row">{vacancy.name}</th>
        <td className="text-right">&euro; {vacancy.originalPrice}</td>
      </tr>
    ));
  }

  private getTotalDiscount() {
    return this.props.vacancies.reduce((totalValue, currentVacancy) => totalValue + Number(currentVacancy.discount), 0);
  }

  private getTotalOriginalPrice() {
    return this.props.vacancies.reduce((totalValue, currentVacancy) => totalValue + Number(currentVacancy.originalPrice), 0);
  }

  private getTotalPrice() {
    return this.getTotalOriginalPrice() - this.getTotalDiscount();
  }
}

export default Component;
