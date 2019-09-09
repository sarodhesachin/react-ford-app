import React from 'react';

import './Dashboard.css'
import Filter from './Filter/Filter'
import CarsList from './CarsList/CarsList'
import constants from '../../constants'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      carDetails: []
    }
  }

  componentDidMount = () => {
    this.fetchCarDetails()
  }

  resetHandler = () => {
    console.log("Inside reset handler...")
    this.fetchCarDetails()
  }

  fetchCarDetails = () => {
    fetch(constants.CARS_INVENTRY_URL).then(rawResponse => {
      return rawResponse.json()
    }).then(details => {
      this.setState({
        carDetails: details.Response.VehicleSearch.Vehicles.Vehicle
      })
    })
  }

  exteriorFilterHandler = (event) => {
    console.log("Inside exterior filter handler...")
    let url = `${constants.CARS_INVENTRY_URL}&exteriorColor=${event.target.id}`

    fetch(url).then(rawResponse => {
      return rawResponse.json()
    }).then(details => {
      this.setState({
        carDetails: details.Response.VehicleSearch.Vehicles.Vehicle
      })
    })
  }

  interiorFilterHandler = (event) => {
    console.log("Inside interior filter handler...")
    let url = `${constants.CARS_INVENTRY_URL}&interiorColor=${event.target.id}`

    fetch(url).then(rawResponse => {
      return rawResponse.json()
    }).then(details => {
      this.setState({
        carDetails: details.Response.VehicleSearch.Vehicles.Vehicle
      })
    })
  }

  render() {
    return (
      <div className='dashboard'>
        <Filter 
          exteriorFilterHandler={this.exteriorFilterHandler}
          interiorFilterHandler={this.interiorFilterHandler}
          resetHandler={this.resetHandler}
        />
        <CarsList carDetails={this.state.carDetails}/>
      </div>
    )
  }
}

export default Dashboard;