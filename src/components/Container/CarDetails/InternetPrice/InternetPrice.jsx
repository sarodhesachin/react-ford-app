import React from 'react';

import Popup from '../../../lib/Popup/Popup'
import CarImage from '../CarImage/CarImage'
import './InternetPrice.css'

class InternetPricePopup extends React.Component {

  render () {
    return (
      <Popup
        isOpen={this.props.isOpen}
        onClose={this.props.onClose}
        title="Get an Internet Price"
      >
        <div className='popup-content'>
          <Details url={this.props.url} model={this.props.model}/>
          <Form />
        </div>
      </Popup>
    )
  }
}

class Details extends React.Component {
  render () {
    return (
      <div className='details'>
        <CarImage url={this.props.url} height={75} width={120} />
        <p style={{fontWeight: 'bold', alignContent: 'bottom'}}>{`${this.props.model.Year} ${this.props.model.ModelName}`}</p>
      </div>
    )
  }
}

class Form extends React.Component {
  render () {

    let formTextboxes = [
      {label: 'First Name*', name: 'firstName'},
      {label: 'Last Name*', name: 'lastName'},
      {label: 'Phone Number*', name: 'phoneNumber'},
      {label: 'Email*', name: 'email'},
      {label: 'Zip Code*', name: 'zipCode'}
    ]
  
    return (
      <div>
        <p style={{fontWeight: 'bold'}}>Contact Information</p>
        <div className='textbox-container'>
          {
            formTextboxes.map((option, index) => {
              return <TextBox name={option.name} label={option.label} key={index} />
            })
          }
        </div>
      </div>
    )
  }
}

class TextBox extends React.Component {
  render () {
    return (
      <div className='textbox-with-label'>
        <label style={{fontSize: 15}}>{this.props.label}</label>
        <input className='textbox' type='text' name={this.props.name} />
      </div>
    )
  }
}

export default InternetPricePopup;
