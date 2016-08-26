require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-editable-svg-label":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Portal = require('react-portal');

var ReactEditableSvgLabel = React.createClass({
  displayName: 'ReactEditableSvgLabel',

  propTypes: {
    onChange: React.PropTypes.func,
    minLabelWidth: React.PropTypes.number,
    children: React.PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onChange: function onChange() {},
      minLabelWidth: 100
    };
  },

  getInitialState: function getInitialState() {
    return {
      isEditing: false,
      labelX: 0,
      labelY: 0,
      labelWidth: 0,
      labelHeight: 0
    };
  },

  toggleEditing: function toggleEditing(e) {
    this.setState({
      isEditing: !this.state.isEditing
    });
  },

  handleChangeText: function handleChangeText(e) {
    var text = e.target.value;
    this.props.onChange(text);
  },

  updateLableBounds: function updateLableBounds() {
    var rect = this.refs.label.getBoundingClientRect();
    this.setState({
      labelX: rect.left,
      labelY: rect.top,
      labelWidth: rect.width,
      labelHeight: rect.height
    });
  },

  componentDidMount: function componentDidMount() {
    this.updateLableBounds();
  },

  render: function render() {
    var label = React.createElement(
      'text',
      _extends({ ref: 'label' }, this.props),
      this.props.children
    );
    return React.createElement(
      Portal,
      { openByClickOn: label, closeOnOutsideClick: true, style: { position: 'absolute', top: this.state.labelY, left: this.state.labelX } },
      React.createElement('input', { type: 'text', value: this.props.children, onChange: this.handleChangeText, style: { width: Math.max(this.props.minLabelWidth, this.state.labelWidth), height: this.state.labelHeight } })
    );
  }

});

exports['default'] = ReactEditableSvgLabel;
module.exports = exports['default'];

},{"react":undefined,"react-portal":undefined}]},{},[]);
