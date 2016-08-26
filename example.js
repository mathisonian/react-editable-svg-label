require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactEditableSvgLabel = require('react-editable-svg-label');

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			text: 'Click me to change this text!'
		};
	},

	handleChangeText: function handleChangeText(newText) {
		this.setState({
			text: newText
		});
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'svg',
				{ width: '400px', height: '300px',
					xmlns: 'http://www.w3.org/2000/svg' },
				React.createElement('circle', { cx: 200, cy: 150, r: 150, fill: 'orange' }),
				React.createElement(
					ReactEditableSvgLabel,
					{ onChange: this.handleChangeText, x: 200, y: 150, textAnchor: 'middle' },
					this.state.text
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-editable-svg-label":undefined}]},{},[1]);
