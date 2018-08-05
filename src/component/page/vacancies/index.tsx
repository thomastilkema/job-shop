import * as React from 'react';

class Component extends React.Component<{}, {}> {

  public render() {
    return (
      <div className="column-wrapper">
        <div className="column">
          <h1>Online vacatures</h1>

          <h2>Introductiepakketten</h2>

          <p>Hier zullen de vacaturepakketten worden getoond</p>
        </div>

        <div className="column column--aside">
          <p>Hier zal de winkelwagen worden getoond</p>
        </div>
      </div>
    );
  }

}

export default Component;
