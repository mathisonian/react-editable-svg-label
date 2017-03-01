(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactEditableSvgLabel = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var Portal = require('react-portal');

var ReactEditableSvgLabel = React.createClass({
  displayName: 'ReactEditableSvgLabel',

  propTypes: {
    onChange: React.PropTypes.func,
    minLabelWidth: React.PropTypes.number,
    focusOnOpen: React.PropTypes.bool,
    children: React.PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onChange: function onChange() {},
      minLabelWidth: 100,
      focusOnOpen: true
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

  handleOpen: function handleOpen(domNode) {
    if (this.props.focusOnOpen) {
      this.refs.input.focus();
    }
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

  updateLabelBounds: function updateLabelBounds() {
    var rect = this.refs.label.getBoundingClientRect();
    this.setState({
      labelX: rect.left,
      labelY: rect.top,
      labelWidth: rect.width,
      labelHeight: rect.height
    });
  },

  componentDidMount: function componentDidMount() {
    this.updateLabelBounds();
  },

  render: function render() {
    // Omit onChange, minLabelWidth, and children.
    var passThroughProps = _extends({}, this.props);
    Object.keys(this.constructor.propTypes).forEach(function (key) {
      delete passThroughProps[key];
    });

    var label = React.createElement(
      'text',
      _extends({ ref: 'label' }, passThroughProps),
      this.props.children
    );
    return React.createElement(
      Portal,
      { openByClickOn: label, closeOnOutsideClick: true, onOpen: this.handleOpen },
      React.createElement('input', { ref: 'input', type: 'text', value: this.props.children, onChange: this.handleChangeText, style: { position: 'absolute', top: this.state.labelY, left: this.state.labelX, width: Math.max(this.props.minLabelWidth, this.state.labelWidth), height: this.state.labelHeight } })
    );
  }

});

exports['default'] = ReactEditableSvgLabel;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"react-portal":undefined}]},{},[1])(1)
});