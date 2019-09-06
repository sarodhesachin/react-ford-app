import React from 'react';

import './Dashboard.css'
import Filter from './Filter/Filter'
import CarsList from './CarsList/CarsList'

class Dashboard extends React.Component {
  render() {
    return (
      <div className='Dashboard'>
        <Filter />
        <CarsList />
      </div>
    )
  }
}

export default Dashboard;