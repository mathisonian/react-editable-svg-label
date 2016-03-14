var React = require('react');
var Portal = require('react-portal');

var ReactEditableSvgLabel = React.createClass({

	getDefaultProps () {
		return {
			x: 0,
			y: 0,
			onChange: function() {},
			minLabelWidth: 100
		}
	},

	getInitialState () {
		return {
			isEditing: false,
			labelX: 0,
			labelY: 0,
			labelWidth: 0,
			labelHeight: 0
		}
	},

	toggleEditing (e) {
		this.setState({
			isEditing: !this.state.isEditing
		});
	},

	handleChangeText (e) {
		var text = e.target.value;
		this.props.onChange(text);
	},


	updateLableBounds () {
		var rect = this.refs.label.getBoundingClientRect();
		this.setState({
			labelX: rect.left,
			labelY: rect.top,
			labelWidth: rect.width,
			labelHeight: rect.height
		})
	},

	componentDidMount () {
		this.updateLableBounds();
	},

	render () {
		var label = <text ref='label' {...this.props}>{this.props.children}</text>;
		return (
			<Portal openByClickOn={label} closeOnOutsideClick={true} style={{position: 'absolute', top: this.state.labelY, left: this.state.labelX}}>
				<input type='text' value={this.props.children} onChange={this.handleChangeText} style={{width: Math.max(this.props.minLabelWidth, this.state.labelWidth), height: this.state.labelHeight}} />
			</Portal>
		);
	}

});

export default ReactEditableSvgLabel;
