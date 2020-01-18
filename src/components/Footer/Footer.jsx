import React, { Component } from 'react';

import logo from '../../ford-logo.png'
import constants from '../../constants'
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <div className='footer'>
        <div>
          <img className='footer-logo' src={logo} />
        </div>
        <FooterSection />
      </div>
    )
  }
}

class FooterSection extends Component {
  render() {
    return (
      <div className="footer-content">
        {
          Object.keys(constants.FOOTER_ITEMS).map((header, index) => {
            return <div key={index}><SingleSection heading={header} items={constants.FOOTER_ITEMS[header]} /></div>
          })
        }
      </div>
    )
  }
}

class SingleSection extends Component {
  render() {
    return (
      <div className="footer-single-section">
        <h4>{this.props.heading}</h4>
        {
          this.props.items.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </div>
    )
  }
}

export default Footer
