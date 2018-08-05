import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '@app/style/app.css';

import ConfirmCheckoutPage from '@app/component/page/confirm';
import VacanciesPage from '@app/component/page/vacancies';

class Component extends React.Component<{}, {}> {

  public render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact={true} path="/" component={VacanciesPage} />
          <Route path="/bevestigen" component={ConfirmCheckoutPage} />
        </div>
      </BrowserRouter>
    );
  }

}

export default Component;
