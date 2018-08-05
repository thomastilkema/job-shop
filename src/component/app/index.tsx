import * as React from 'react';

import '@app/style/app.css';

import VacanciesPage from '@app/component/page/vacancies';

class Component extends React.Component<{}, {}> {

  public render() {
    return (
      <div className="container">
        <VacanciesPage />
      </div>
    );
  }

}

export default Component;
