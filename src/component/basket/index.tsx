import * as React from 'react';

import { IVacancy } from '@app/interface';

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
          <p>Vacancy details here</p>

          <button
            className="button button--white width-100"
            type="submit"
          >
            Bestellen
          </button>
        </React.Fragment>
      );
    }

    return <p>Selecteer één van de vacaturepakketten uit de lijst</p>;
  }
}

export default Component;
