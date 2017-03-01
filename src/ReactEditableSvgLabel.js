var React = require('react');
var Portal = require('react-portal');

var ReactEditableSvgLabel = React.createClass({

  propTypes: {
    onChange: React.PropTypes.func,
    minLabelWidth: React.PropTypes.number,
    focusOnOpen: React.PropTypes.bool,
    children: React.PropTypes.any
  },

  getDefaultProps () {
    return {
      onChange: function () {},
      minLabelWidth: 100,
      focusOnOpen: true
    };
  },

  getInitialState () {
    return {
      isEditing: false,
      labelX: 0,
      labelY: 0,
      labelWidth: 0,
      labelHeight: 0
    };
  },

  handleOpen (domNode) {
    if (this.props.focusOnOpen) {
      this.refs.input.focus();
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

  updateLabelBounds () {
    var rect = this.refs.label.getBoundingClientRect();
    this.setState({
      labelX: rect.left,
      labelY: rect.top,
      labelWidth: rect.width,
      labelHeight: rect.height
    });
  },

  componentDidMount () {
    this.updateLabelBounds();
  },

  render () {
    // Omit onChange, minLabelWidth, and children.
    var passThroughProps = Object.assign({}, this.props);
    Object.keys(this.constructor.propTypes).forEach(function (key) {
      delete passThroughProps[key];
    });

    var label = <text ref='label' {...passThroughProps}>{this.props.children}</text>;
    return (
      <Portal openByClickOn={label} closeOnOutsideClick onOpen={this.handleOpen}>
        <input ref='input' type='text' value={this.props.children} onChange={this.handleChangeText} style={{position: 'absolute', top: this.state.labelY, left: this.state.labelX, width: Math.max(this.props.minLabelWidth, this.state.labelWidth), height: this.state.labelHeight}} />
      </Portal>
    );
  }

});

export default ReactEditableSvgLabel;
