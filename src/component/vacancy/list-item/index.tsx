import * as React from 'react';

import { IVacancy } from '@app/interface';

interface IProps {
  vacancy: IVacancy;
}

class Component extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { vacancy } = this.props;

    return (
      <tr>
        <td>
          <input
            name="vacancy"
            type="radio"
            value={vacancy.id}
          />
        </td>
        <td>{vacancy.name}</td>
        <td>{vacancy.period}</td>
        <td>&euro; {vacancy.originalPrice}</td>
        <td>&euro; {this.getCurrentPrice(vacancy.originalPrice, vacancy.discount)}</td>
      </tr>
    );
  }

  private getCurrentPrice(originalPrice: number, discount: number) {
    return originalPrice - discount;
  }

}

export default Component;
