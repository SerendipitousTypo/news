import React from 'react';

const rd3 = require('react-d3');
const PieChart = rd3.PieChart;

let colorMap = [
  '#C8020A', // 'Anger'
  '#6EE017', // 'Disgust'
  '#FF006A', // 'Fear'
  '#FF7A06', // 'Joy'
  '#0099FF', // 'Sadness'
];


class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieData: [],
    }

  }

  render() {
    //if(this.props.clicked){
      var width = window.innerWidth/1.5;
      var height = window.innerWidth/1.5;
      var labels = true;
    // }else{
    //    var width = window.innerWidth/3;
    //    var height = window.innerWidth/3;
    //    var labels = false;
    // }

      return (
        <div>
          <PieChart

            data={ this.props.pieData.watsonData }
            width={(width)}
            height={ (height / 2)}
            radius={ (height / 6)}
            innerRadius={ (height / 4)  }
            sectorBorderColor="black"
            colors={function(d) {
              return colorMap[d];
            }}
            title={this.props.pieData.circleAttributes.title}
            showInnerLabels={labels}
            showOuterLabels={labels}
            labelTextFill='#ffffff'
          />
      </div>
      );
  }
}

export default Chart;

// propTypes: {
//   data:               React.PropTypes.array,
//   radius:             React.PropTypes.number,
//   cx:                 React.PropTypes.number,
//   cy:                 React.PropTypes.number,
//   labelTextFill:      React.PropTypes.string,
//   valueTextFill:      React.PropTypes.string,
//   valueTextFormatter: React.PropTypes.func,
//   colors:             React.PropTypes.func,
//   colorAccessor:      React.PropTypes.func,
//   title:              React.PropTypes.string,
//   showInnerLabels:    React.PropTypes.bool,
//   showOuterLabels:    React.PropTypes.bool,
//   sectorBorderColor:  React.PropTypes.string,
//   hoverAnimation:     React.PropTypes.bool
// },
