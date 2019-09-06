import React from 'react';

import reset from '../../../refresh.svg'

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
          console.log(filter)
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
        <ExteriorColorFilter 
          exteriorFilter={this.state.exteriorFilter}
          exteriorFilterHandler={this.props.exteriorFilterHandler}
          resetHandler={this.props.resetHandler}
        />
        <InteriorColorFilter 
          interiorFilter={this.state.interiorFilter}
          interiorFilterHandler={this.props.interiorFilterHandler}
          resetHandler={this.props.resetHandler}
        />
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
          <button 
            style={{backgroundColor: 'white', border: "none", cursor: "pointer"}}
            onClick={this.props.resetHandler}
          >
            <img className='Reset' src={reset} />
          </button>
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
            return <ExteriorColorButton 
              name={element.Name} 
              ID={element.ID} 
              color={'#' + element.SwatchHexCode.slice(2)}
              exteriorFilterHandler={this.props.exteriorFilterHandler}
            />
          })
        }
      </div>
    }

    return (
      <div>
        <FilterHeader 
          filterHeader='Exterior Color'
          resetHandler={this.props.resetHandler}
        />
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
      <span 
        className='Circle'
        name={this.props.name}
        id={this.props.ID}
        style={{backgroundColor: this.props.color}} 
        onClick={this.props.exteriorFilterHandler}
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
            return <InteriorColorButton 
              imgSource={element.SwatchUrl}
              name={element.Name} 
              ID={element.ID} 
              group={element.Group} 
              interiorFilterHandler={this.props.interiorFilterHandler}
            />
          })
        }
      </div>
    }

    return (
      <div>
        <FilterHeader 
          filterHeader='Interior Color'
          resetHandler={this.props.resetHandler}
        />
        {colorsList}
      </div>
    )
  }
}

class InteriorColorButton extends React.Component {
  render() {
    return (
      <button className='InteriorFiltersOptions' onClick={this.props.interiorFilterHandler}>
        <img 
          className='Circle' 
          id={this.props.ID} 
          src={this.props.imgSource}
        />
        <p id={this.props.Id} style={{margin:10}}>{this.props.group}</p>
      </button>
      
    )
  }
}

export default Filter;