import React, { Component } from 'react';

import './CarDetails.css'

class CarDetails extends Component {
  render() {

    let prefix = 'https://build.ford.com/dig/Ford/' + this.props.location.state.Model.ModelName + '/' + this.props.location.state.Model.Year + '/HD-FULL/';
    let suffix = '/EXT/1/vehicle.png?r=NaN';
    let imgUrl = prefix + this.props.location.state.ImageToken + suffix;

    return(
      <div>
        <BasicDeatils 
          url={imgUrl} 
          model={this.props.location.state.Model} 
          price={this.props.location.state.Pricing.MSRP} 
        />
        <div><hr style={{marginLeft:50, marginRight: 50}}/></div>
        <Summary carDetails={this.props.location.state} />
      </div>
    )
  }
}

class BasicDeatils extends Component {

  render() {
    return (
      <div className="basic-details-section">
        <ImageSection url={this.props.url} />
        <NameSection model={this.props.model} price={this.props.price}/>
      </div>
    )
  }
}

class ImageSection extends Component {

  render() {
    return (
      <div className="image-list-section">
        <img style={{height: 250, width: 500}} src={this.props.url}  />
      </div>
    )
  }
}

class NameSection extends Component {

  render() {
    return (
      <div className="name-section">
        <h2><label>{this.props.model.Year + " " + this.props.model.ModelName + " " + this.props.model.Make}</label></h2>
        <h4> Price : ${this.props.price}*</h4>
        <button className="details-btn" >Get an Internet Price</button>
      </div>
    )
  }
}

class Summary extends Component{
  render() {
    return(
      <div className="summary-section">
        <PriceSummary carDetails={this.props.carDetails} />
        <YourVehicle carDetails={this.props.carDetails} />
      </div>
    )
  }
}

class PriceSummary extends Component{
  render() {
    return(
      <div className="price-summary-section">
        <h3>Pricing Summary</h3>
        <br/>
        <Info name="Base MSRP:" value={"$" + this.props.carDetails.Pricing.BaseMSRP} />
        <hr/>
        <Info name="Total of Options:" value={"$" + this.props.carDetails.Pricing.Options} />
        <hr/>
        <Info name="Destination Charges:" value={"$" + this.props.carDetails.Pricing.DestinationDeliveryCharge} />
        <hr/>
        <Info name="Total MSRP:" value={"$" + this.props.carDetails.Pricing.MSRP}/>
        <hr/>
        <Info name="Net Price: " value={"$" + this.props.carDetails.Pricing.BaseInvoice} />                
      </div>
    )
  }
}

class Info extends Component{
  render() {
    return(
      <div className="info-section">
        <p>{this.props.name}</p>
        <p>{this.props.value}</p>
      </div>
    )
  }
}

class YourVehicle extends Component{
  render() {
    return(
      <div className="vehicle-summary-section">
        <h3>Your Vehicle</h3>
        <br/>
        <Info name="EPA-Est MPG:" value={this.props.carDetails.MPG.City+" City/"+this.props.carDetails.MPG.Highway+" Hwy"} />
        <Info name="Engine" value={this.props.carDetails.NormalizeEngine} />
        <Info name="Drivetrain" value={this.props.carDetails.NormalizeDrive} />
        <Info name="Transmission:" value={this.props.carDetails.NormalizeTransmission} />
        <Info name="Exterior: " value={this.props.carDetails.NormalizeExtPaint} />
        <Info name="Interior: " value={this.props.carDetails.NormalizeTrimType} />
        <Info name="Package: " value={this.props.carDetails.VehicleStage} />                
      </div>
    )
  }
}

export default CarDetails;
