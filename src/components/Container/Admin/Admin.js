import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { connect } from "react-redux";

class Admin extends React.Component {
  render() {

    console.log(this.props)

    return (
      <div>
        <div>HEADING</div>
        <div>SUB-HEADING</div>
        <div><hr /></div>
        <ChartsContainer charts={[]}/>
      </div>
    )
  }
}

class ChartsContainer extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.charts.map(chart => {
            return <Chart config={chart} />
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
        type: 'column'
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
        }
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
        <ReactHighcharts config={config} />
      </div>
    )
  }
}

const mapStateToProps = state => {

  console.log(state)

  return {
    clicksCount: state.clicksCount
  };
};
export default connect(mapStateToProps)(Admin);
