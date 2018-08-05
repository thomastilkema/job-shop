import * as React from 'react';

import { IVacancy } from '@app/interface';

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
    if (this.props.vacancy) {
      return (
        <React.Fragment>
          <VacancyDetails
            vacancy={this.props.vacancy}
          />

          <div className="pt--lg">
            <button
              className="button button--white width-100"
              type="submit"
            >
              Bestellen
            </button>
          </div>
        </React.Fragment>
      );
    }

    return <p>Selecteer één van de vacaturepakketten uit de lijst</p>;
  }
}

export default Component;
