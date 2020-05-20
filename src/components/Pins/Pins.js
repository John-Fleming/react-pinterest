import React from 'react';

import './Pins.scss';
import pinShape from '../../helpers/propz/pinShape';

class Pins extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="Pin col-md-3">
        <div className="card">
        <img className="card-img-top" src={pin.imageUrl} alt="Pin" />
        <div className="card-body">
          <h5 className="card-title">{pin.title}</h5>
        </div>
      </div>
      </div>
    );
  }
}

export default Pins;
