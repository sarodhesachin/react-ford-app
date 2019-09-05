import React from 'react';

import Dashboard from './Dashboard/Dashboard'
import './Container.css'

class Container extends React.Component {
  render() {
    return (
      <div className='Container'>
        <Dashboard />
      </div>
    )
  }
}

export default Container;