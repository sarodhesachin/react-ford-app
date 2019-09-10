import React from 'react';
import { BrowserRouter as Routers, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import './CarsList.css'

class CarsListContainer extends React.Component {

  countClick = (event) => {
    this.props.dispatch({
      type: "CLICK",
      carId: event.target.id
    })
  }

  render() {
    return (
      <div className='cars-list-container'>
        <div className='heading-col-1'>
          <p>DASHBOARD</p>
          <Link className='admin-link' to="/admin">admin</Link>
        </div>
        <Cars carDetails={this.props.carDetails} clickHandler={this.countClick} />
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
              <Car details={car} clickHandler={this.props.clickHandler} />
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
          <button className='button' id={this.props.details.Vin} onClick={this.props.clickHandler}>
            View Details
          </button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    clicksCount: state.clicksCount
  }
}

export default connect(mapStateToProps)(CarsListContainer);