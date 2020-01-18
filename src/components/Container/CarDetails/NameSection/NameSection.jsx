import React, { Component } from 'react';

import InternetPrice from './../InternetPrice/InternetPrice'
import './NameSection.css'

class NameSection extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isOpen: false
		}
	}

	getInternetPrice = () => {
		this.setState({
			isOpen: true
		})
	}

	onClose = () => {
		this.setState({
			isOpen: false
		})
	}

	render() {
		return (
			<div className="name-section">
				<h2><label>{this.props.model.Year + " " + this.props.model.ModelName + " " + this.props.model.Make}</label></h2>
				<h4> Price : ${this.props.price}*</h4>
				<button className="details-btn" onClick={this.getInternetPrice}>
					Get an Internet Price
				</button>
				<InternetPrice 
					isOpen={this.state.isOpen} 
					onClose={this.onClose}
					url={this.props.url}
					model={this.props.model}
				/>
			</div>
		)
	}
}

export default NameSection;
