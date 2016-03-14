var React = require('react');
var ReactDOM = require('react-dom');
var ReactEditableSvgLabel = require('react-editable-svg-label');

var App = React.createClass({

	getInitialState () {
		return {
			text: 'Click me to change this text!'
		}
	},

	handleChangeText (newText) {
		this.setState({
			text: newText
		});
	},

	render () {
		return (
			<div>
				<svg width="400px" height="300px"
		       xmlns="http://www.w3.org/2000/svg">
					<ReactEditableSvgLabel onChange={this.handleChangeText} x={10} y={100}>
						{this.state.text}
					</ReactEditableSvgLabel>
				</svg>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
