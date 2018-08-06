import * as React from 'react';

import { IVacancy } from '@app/interface';

import BasketTotals from '@app/component/basket-totals';
import VacancyDetails from '@app/component/vacancy/details';

interface IProps {
  vacancy: IVacancy;
}

class Component extends React.Component<IProps, {}> {

  public render() {
    return (
      <React.Fragment>
        <h2>Bestelling</h2>

        <div className="pt--lg">
          {this.renderContent()}
        </div>
      </React.Fragment>
    );
  }

  private renderContent() {
    if (!this.props.vacancy) {
      return <p>Selecteer één van de vacaturepakketten uit de lijst</p>;
    }

    return (
      <React.Fragment>
        <VacancyDetails
          vacancy={this.props.vacancy}
        />

        <div className="divider divider--white" />

        <BasketTotals
          vacancies={[this.props.vacancy]}
        />

        <div className="divider divider--white" />

        <button
          className="button button--white width-100"
          type="submit"
        >
          Bestellen
        </button>
      </React.Fragment>
    );
  }

}

export default Component;
