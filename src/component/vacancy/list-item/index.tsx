import * as React from 'react';

import './style.css';

import { IVacancy, selectVacancyFunction } from '@app/interface';

interface IProps {
  isSelected: boolean;
  onSelectVacancy: selectVacancyFunction;
  vacancy: IVacancy;
}

class Component extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);

    this.onClickRow = this.onClickRow.bind(this);
  }

  public render() {
    const { vacancy } = this.props;
    const classNames = 'cursor-pointer' + ( this.props.isSelected ? ' table__active' : '' );

    return (
      <tr
        className={classNames}
        onClick={this.onClickRow}
      >
        <td className="cell-radio">
          <input
            checked={this.props.isSelected}
            onChange={this.onChangeRadio}
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

  private onClickRow(event: React.MouseEvent<HTMLTableRowElement>) {
    this.props.onSelectVacancy(this.props.vacancy);
  }

  private onChangeRadio(event: React.ChangeEvent<HTMLInputElement>) {
    // Prevent executing this event because it will be handled by this.onClickRow()
    event.stopPropagation();
  }

}

export default Component;
