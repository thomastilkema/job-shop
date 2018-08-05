import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '@app/style/app.css';

import VacanciesPage from '@app/component/page/vacancies';

class Component extends React.Component<{}, {}> {

  public render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact={true} path="/" component={VacanciesPage} />
        </BrowserRouter>
      </div>
    );
  }

}

export default Component;
