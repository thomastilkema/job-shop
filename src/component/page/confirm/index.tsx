import * as React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import { IVacancy } from '@app/interface';
import { store } from '@app/store';

import VacancyDetails from '@app/component/vacancy/details';

interface IState {
  vacancy: IVacancy;
}

class Component extends React.Component<{}, IState> {

  constructor(props: object) {
    super(props);

    this.state = {
      vacancy: null
    };
  }

  public componentDidMount() {
    document.title = 'Bevestig je aankoop';

    this.setState({
      vacancy: store.getState().checkoutVacancy
    });
  }

  public render() {
    return (
      <div className="column">
        {this.renderContent()}
      </div>
    );
  }

  private renderContent() {
    if (!this.state.vacancy) {
      return (
        <p>
          Het lijkt erop dat je nog geen vacaturepakket hebt gekozen dat je wilt aanschaffen. {' '}
          <Link to="/">Selecteer een vacaturepakket</Link> en kies voor "Bestellen".
        </p>
      );
    }

    return (
      <React.Fragment>
        <p>Je hebt ervoor gekozen om het volgende vacaturepakket aan te schaffen:</p>

        <div className="vacancy-confirm-details">
          <VacancyDetails
            vacancy={this.state.vacancy}
          />
        </div>

        <div className="pt--lg">
          <p>Kies een ander pakket op <Link to="/">de pagina met vacaturepakketten</Link></p>

          <button className="button button--primary">Ga door</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Component;
