import React from 'react';
import PropTypes from 'prop-types';

import './Pins.scss';
import pinShape from '../../helpers/propz/pinShape';

class Pins extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    removePin: PropTypes.func.isRequired,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { pin, removePin } = this.props;
    removePin(pin.id);
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="Pin col-md-3">
        <div className="card">
        <img className="card-img-top" src={pin.imageUrl} alt="Pin" />
        <div className="card-body">
          <h5 className="card-title">{pin.title}</h5>
          <button className="btn btn-danger" onClick={this.deletePinEvent}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
      </div>
    );
  }
}

export default Pins;
