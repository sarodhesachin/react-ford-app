import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { connect } from "react-redux";

import './Admin.css'

class Admin extends React.Component {
  render() {

    let charts = [{
      title: "Details Click Count",
      categories: Object.keys(this.props.clicksCount),
      y_axis_title: "Clicks Count",
      series: Object.values(this.props.clicksCount)
    }]

    return (
      <div className='admin-page'>
        <div className='admin-page-heading'>User Interaction statistics</div>
        <div><hr /></div>
        <ChartsContainer charts={charts}/>
      </div>
    )
  }
}

class ChartsContainer extends React.Component {
  render() {
    return (
      <div className='charts-list'>
        {
          this.props.charts.map((chart, index) => {
            return <Chart config={chart} key={index} />
          })
        }
      </div>
    )
  }
}

class Chart extends React.Component {

  render() {

    let config = {
      chart: {
        type: 'column',
      },
      title: {
        text: this.props.config.title
      },
      xAxis: {
        categories: this.props.config.categories
      },
      yAxis: {
        min: 0,
        allowDecimals: false,
        title: {
          text: this.props.config.y_axis_title
        },
        maxPadding: 1
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          name: 'Ford',
          data: this.props.config.series
        }
      ]
    }

    return (
      <div>
        <div className='chart'>
          <ReactHighcharts config={config} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clicksCount: state.clickCountReducer
  };
};
export default connect(mapStateToProps)(Admin);
