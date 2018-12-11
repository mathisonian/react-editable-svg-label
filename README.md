# react-editable-svg-label

A text component for SVG that allows users to edit the contents.

Live demo: [mathisonian.github.io/react-editable-svg-label](http://mathisonian.github.io/react-editable-svg-label/)


## Installation

The easiest way to use react-editable-svg-label is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-editable-svg-label.js` in your page. If you use this, make sure you have already included React and react-portal, and they are available as global variables `React` and `Portal`.

```
npm install react-portal react-editable-svg-label --save
```


## Usage

```js
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
				<svg width="400px" height="300px" xmlns="http://www.w3.org/2000/svg">
					<ReactEditableSvgLabel onChange={this.handleChangeText} x={10} y={100}>
						{this.state.text}
					</ReactEditableSvgLabel>
				</svg>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
```

### Properties

**focusOnOpen**: Give the input focus when it's opened.

Anything else that is passed as a prop to the editable label will be passed on
to the svg `text` element


## Demo & Examples


To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

The build system requires Node 6. [It does not work in Node 8.][issue]

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

[issue]: https://github.com/JedWatson/react-component-gulp-tasks/issues/31

## License

MIT

Copyright (c) 2016 Matthew Conlen.
