import React from 'react';

import './Dashboard.css'
import Filter from './Filter/Filter'

class Dashboard extends React.Component {
  render() {
    return (
      <div className='Dashboard'>
        <Filter />
      </div>
    )
  }
}

export default Dashboard;