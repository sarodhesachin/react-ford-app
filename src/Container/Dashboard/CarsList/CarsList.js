import React from 'react';

import constants from '../../../constants'
import './CarsList.css'

class CarsListContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      carDetails: []
    }
  }

  componentDidMount = () => {
    this.fetchCarDetails()
  }

  fetchCarDetails = () => {
    fetch(constants.CARS_INVENTRY_URL).then(rawResponse => {
      return rawResponse.json()
    }).then(details => {
      console.log(details)
      this.setState({
        carDetails: details.Response.VehicleSearch.Vehicles.Vehicle
      })
    })
  }

  render() {
    return (
      <div className='CarsListContainer'>
        <div>
          <p>DASHBOARD</p>
        </div>
        <Cars carDetails={this.state.carDetails}/>
      </div>
    )
  }
}

class Cars extends React.Component {
  render() {

    let cars = <div></div>
    if (Array.isArray(this.props.carDetails)) {
      cars = <div className='CarsList'>
        {
          this.props.carDetails.map(car => {
            return (
              <Car 
                model={car.Model} 
                imageToken={car.ImageToken} 
                vin={car.Vin} 
                price={car.Pricing.MSRP}
              />
            )
          })
        }
      </div>

    }

    return (
      <div>{cars}</div>
    )
  }
}

class Car extends React.Component {
  render() {
    let imgSource = `http://build.ford.com/dig/Ford/${this.props.model.ModelName}/${this.props.model.Year}/HD-FULL/${this.props.imageToken}/EXT/1/vehicle.png?r=NaN`
    console.log(imgSource)

    return (
      <div className='Car'>
        <img src={imgSource}/>
        <label>{`${this.props.model.Year} ${this.props.model.ModelName} ${this.props.model.Make}`}</label>
        <hr />
        <p style={{fontWeight: "bold"}}>Net Price: ${this.props.price}</p>
        <p>{"VIN " + this.props.vin}</p>
        <button className='button'>View Details</button>
      </div>
    )
  }
}

export default CarsListContainer;