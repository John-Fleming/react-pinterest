import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class PinForm extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    saveNewPin: PropTypes.func.isRequired,
  }

  state = {
    pinTitle: '',
    pinImageUrl: '',
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ pinImageUrl: e.target.value });
  }

  savePin = (e) => {
    e.preventDefault();
    const { pinTitle, pinImageUrl } = this.state;
    const { boardId, saveNewPin } = this.props;
    const newPin = {
      boardId,
      imageUrl: pinImageUrl,
      title: pinTitle,
      uid: authData.getUid(),
    };
    saveNewPin(newPin);
  }

  render() {
    const { pinTitle, pinImageUrl } = this.props;
    return (
      <div className="PinForm mb-4">
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="pin-title">Title</label>
            <input type="text" className="form-control" id="pin-title" placeholder="Pin Name" value={pinTitle} onChange={this.titleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="pin-image-url">Image Url</label>
            <input type="text" className="form-control" id="pin-image-url" placeholder="Board Description" value={pinImageUrl} onChange={this.imageUrlChange}/>
          </div>
          <button className="btn btn-primary" onClick={this.savePin}>Save Pin</button>
        </form>
      </div>
    );
  }
}

export default PinForm;
