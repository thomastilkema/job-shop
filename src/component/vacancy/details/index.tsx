import * as React from 'react';

import './style.css';

import { IVacancy } from '@app/interface';

interface IProps {
  vacancy: IVacancy;
}

class Component extends React.Component<IProps, {}> {

  public render() {
    const { vacancy } = this.props;

    return (
      <React.Fragment>
        <div className="vacancy-details__image-placeholder">
          <img
            alt={vacancy.name}
            src={vacancy.image}
          />
        </div>

        <div className="pt--lg">
          <h3>{vacancy.name}</h3>
          <ul>
            <li>{vacancy.period} dagen online</li>
            {this.renderFeatures()}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  private renderFeatures() {
    return this.props.vacancy.features.map((feature, index) =>
      <li key={index}>{feature}</li>
    );
  }
}

export default Component;
