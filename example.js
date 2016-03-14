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
				{ width: '400px', height: '300px', viewBox: '0 0 400 300',
					xmlns: 'http://www.w3.org/2000/svg' },
				React.createElement('circle', { style: { fill: 'orange' }, cx: 100, cy: 100, r: 100 }),
				React.createElement(
					ReactEditableSvgLabel,
					{ onChange: this.handleChangeText, x: 10, y: 100 },
					this.state.text
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-editable-svg-label":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY29ubGVubS9wcm9qZWN0cy9yZWFjdC1lZGl0YWJsZS1zdmctbGFiZWwvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxJQUFJLHFCQUFxQixHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDOztBQUVoRSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFFM0IsZ0JBQWUsRUFBQywyQkFBRztBQUNsQixTQUFPO0FBQ04sT0FBSSxFQUFFLCtCQUErQjtHQUNyQyxDQUFBO0VBQ0Q7O0FBRUQsaUJBQWdCLEVBQUMsMEJBQUMsT0FBTyxFQUFFO0FBQzFCLE1BQUksQ0FBQyxRQUFRLENBQUM7QUFDYixPQUFJLEVBQUUsT0FBTztHQUNiLENBQUMsQ0FBQztFQUNIOztBQUVELE9BQU0sRUFBQyxrQkFBRztBQUNULFNBQ0M7OztHQUNDOztNQUFLLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsYUFBYTtBQUNsRCxVQUFLLEVBQUMsNEJBQTRCO0lBRXRDLGdDQUFRLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQUFBQyxFQUFDLEVBQUUsRUFBRSxHQUFHLEFBQUMsRUFBQyxFQUFFLEVBQUUsR0FBRyxBQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsQUFBQyxHQUFFO0lBQzVEO0FBQUMsMEJBQXFCO09BQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQUFBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEFBQUMsRUFBQyxDQUFDLEVBQUUsR0FBRyxBQUFDO0tBQ3BFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtLQUNPO0lBQ25CO0dBQ0QsQ0FDTDtFQUNGO0NBQ0QsQ0FBQyxDQUFDOztBQUVILFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBSZWFjdEVkaXRhYmxlU3ZnTGFiZWwgPSByZXF1aXJlKCdyZWFjdC1lZGl0YWJsZS1zdmctbGFiZWwnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRnZXRJbml0aWFsU3RhdGUgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiAnQ2xpY2sgbWUgdG8gY2hhbmdlIHRoaXMgdGV4dCEnXG5cdFx0fVxuXHR9LFxuXG5cdGhhbmRsZUNoYW5nZVRleHQgKG5ld1RleHQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHRleHQ6IG5ld1RleHRcblx0XHR9KTtcblx0fSxcblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPVwiNDAwcHhcIiBoZWlnaHQ9XCIzMDBweFwiIHZpZXdCb3g9XCIwIDAgNDAwIDMwMFwiXG5cdFx0ICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblxuXHRcdFx0XHRcdDxjaXJjbGUgc3R5bGU9e3tmaWxsOiAnb3JhbmdlJ319IGN4PXsxMDB9IGN5PXsxMDB9IHI9ezEwMH0vPlxuXHRcdFx0XHRcdDxSZWFjdEVkaXRhYmxlU3ZnTGFiZWwgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlVGV4dH0geD17MTB9IHk9ezEwMH0+XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS50ZXh0fVxuXHRcdFx0XHRcdDwvUmVhY3RFZGl0YWJsZVN2Z0xhYmVsPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==
