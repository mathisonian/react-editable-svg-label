import React from 'react';
import ReactDOM from 'react-dom';
import ReactEditableSvgLabel from 'react-editable-svg-label';

var App = React.createClass({

  getInitialState () {
    return {
      text: 'Click me to change this text!'
    };
  },

  handleChangeText (newText) {
    this.setState({
      text: newText
    });
  },

  render () {
    return (
      <div>
        <svg width='400px' height='300px'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx={200} cy={150} r={150} fill='orange' />
          <ReactEditableSvgLabel onChange={this.handleChangeText} x={200} y={150} textAnchor='middle' >
            {this.state.text}
          </ReactEditableSvgLabel>
        </svg>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
