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
          Vacancy details here

          <button
            className="button button--white"
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
