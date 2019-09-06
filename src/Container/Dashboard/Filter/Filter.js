import React from 'react';

import constants from '../../../constants'
import './Filter.css'

class Filter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      interiorFilter: {},
      exteriorFilter: {}
    }
  }

  componentDidMount = () => {
    fetch(constants.FILTER_URL).then(rawResponse => {
      rawResponse.json().then(filterResponse => {

        let filter = filterResponse.Response.FilterDefinitions.FilterDefinition
        if(Array.isArray(filter)) {
          this.setState({
            exteriorFilter: filter[2].FilterItems.FilterItem,
            interiorFilter: filter[3].FilterItems.FilterItem
          })
        }
      })
    })
  }

  render() {
    return (
      <div className='Filter'>
        <div id='filter-text'>Filters</div>
        <ExteriorColorFilter exteriorFilter={this.state.exteriorFilter}/>
        <InteriorColorFilter interiorFilter={this.state.interiorFilter}/>
      </div>
    )
  }
}

class FilterHeader extends React.Component {
  render() {
    return (
      <div className='FilterHeader'>
        <div className='FilterName'>
          <div>{this.props.filterHeader}</div>
          <div>reset</div>
        </div>
        <hr />
      </div>
    )
  }
}

class ExteriorColorFilter extends React.Component {
  render() {
    let colorsList = <div></div>

    if (Array.isArray(this.props.exteriorFilter)) {
      colorsList = <div>
        {
          this.props.exteriorFilter.map(element => {
            return <ExteriorColorButton color={'#' + element.SwatchHexCode.slice(2)}/>
          })
        }
      </div>
    }

    return (
      <div>
        <FilterHeader filterHeader='Exterior Color'/>
        <p>Select as many as you like: </p>
        <p></p>
        {colorsList}
      </div>
    )
  }
}

class ExteriorColorButton extends React.Component {
  render() {
    return (
      <span className='Circle' 
        style={{backgroundColor: this.props.color}} 
        />
    )
  }
}

class InteriorColorFilter extends React.Component {
  render() {
    let colorsList = <div></div>

    if (Array.isArray(this.props.interiorFilter)) {
      colorsList = <div>
        {
          this.props.interiorFilter.map(element => {
            return <InteriorColorButton imgSource={element.SwatchUrl}/>
          })
        }
      </div>
    }

    return (
      <div>
        <FilterHeader filterHeader='Interior Color'/>
        {colorsList}
      </div>
    )
  }
}

class InteriorColorButton extends React.Component {
  render() {
    return (
      <img className='Circle' src={this.props.imgSource}/>
    )
  }
}

export default Filter;