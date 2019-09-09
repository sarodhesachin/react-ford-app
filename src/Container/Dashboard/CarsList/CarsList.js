import React from 'react';
import { BrowserRouter as Routers, Route, Link } from "react-router-dom";

import './CarsList.css'

class CarsListContainer extends React.Component {

  render() {
    return (
      <div className='cars-list-container'>
        <div>
          <p>DASHBOARD</p>
        </div>
        <Cars carDetails={this.props.carDetails}/>
      </div>
    )
  }
}

class Cars extends React.Component {
  render() {

    let cars = <div></div>
    if (Array.isArray(this.props.carDetails)) {
      cars = <div className='cars-list'>
        {
          this.props.carDetails.map(car => {
            return (
              <Car details={car} />
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
    let imgSource = `http://build.ford.com/dig/Ford/${this.props.details.Model.ModelName}/${this.props.details.Model.Year}/HD-FULL/${this.props.details.ImageToken}/EXT/1/vehicle.png?r=NaN`

    return (
      <div className='car'>
        <img src={imgSource}/>
        <label>{`${this.props.details.Model.Year} ${this.props.details.Model.ModelName} ${this.props.details.Model.Make}`}</label>
        <hr />
        <p style={{fontWeight: "bold"}}>Net Price: ${this.props.details.Pricing.MSRP}</p>
        <p>{"VIN " + this.props.details.Vin}</p>
        <Link to={{
          pathname: '/details',
          search: '',
          hash: '',
          state: this.props.details
        }}>
          <button className='button'>View Details</button>
        </Link>
      </div>
    )
  }
}

export default CarsListContainer;