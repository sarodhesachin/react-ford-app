import React from 'react';
import Modal from 'react-modal';

import './Popup.css'

Modal.setAppElement('#root')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '0',
    fontFamily            : 'Times New Roman'
  }
};

export default class Popup extends React.Component {
  
  render () {
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          onRequestClose={this.props.onClose}
          style={customStyles}
        >
          <PopupHeader title={this.props.title} onClose={this.props.onClose}/>
          {this.props.children}
          <PopupFooter />
        </Modal>
      </div>
    )
  }
}

class PopupHeader extends React.Component {
  render () {
    return (
      <div className='popup-header'>
        <div style={{fontWeight: 'bold'}}>{this.props.title}</div>
        <button className='close-button-x' onClick={this.props.onClose}>X</button>
      </div>
    )
  }
}

class PopupFooter extends React.Component {
  render () {
    return (
      <div className='popup-footer'>
        <div><hr /></div>
        <div>
          <button className='cancel-btn'>Cancel</button>
          <button  className='submit-btn'>Submit</button>
        </div>
      </div>
    )
  }
}