import * as React from 'react';

import './style.css';

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
      <tr className="cursor-pointer">
        <td className="cell-radio">
          <input
            name="vacancy"
            type="radio"
            value={vacancy.id}
          />
        </td>
        <td>{vacancy.name}</td>
        <td className="text-right">{vacancy.period}</td>
        <td className="text-right">&euro; <span className="line-through">{vacancy.originalPrice}</span></td>
        <td className="text-right">&euro; {this.getCurrentPrice(vacancy.originalPrice, vacancy.discount)}</td>
      </tr>
    );
  }

  private getCurrentPrice(originalPrice: number, discount: number) {
    return originalPrice - discount;
  }

}

export default Component;
