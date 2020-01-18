import React from 'react';

export default class CarImage extends React.Component {
  render() {
    return (
      <div>
        <img 
          style={{height: this.props.height, width: this.props.width}} 
          src={this.props.url} 
        />
      </div>
    )
  }
}
