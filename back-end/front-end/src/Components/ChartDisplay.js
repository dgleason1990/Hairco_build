import React, { Component } from 'react';
import { Doughnut,Bar  } from 'react-chartjs-2';

export default class ChartDisplay extends Component {
  render() {
    return (
      <div>
        <Doughnut
                data={this.props.chartData}
                options={{}}
                />
      </div>
    )
  }
}
