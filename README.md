# ReFlexible

React flexbox layout

## Getting Started

```
npm install reFlexible
```

## Issues

Please [Open issue](https://github.com/pavkout/reFlexible/issues), describe bug, suggest solution

### Some examples
```js
import React, { Component } from 'react';
import ReactElement  from 'react/lib/ReactElement';
import FlexBox from 'flexBox';

import './app.post.css';

class App extends Component {
	getRandomColor() {
		return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	}
	render() {

		const style = {
			padding: 4,
			margin: 10,
			textAlign: 'center',
		  color: 'white',
			backgroundColor: this.getRandomColor()
		};

		return (
			<div reflexible>
				<div style={style} self-end flex="4">A</div>
				<div style={style} order="1" flex-grow="1">B</div>
				<div style={style} order="2" flex-grow="2">C</div>
				<div style={style} flex-grow="1" flex-basis="200px">D</div>
				<div style={style} flex-grow="1">E</div>
				<div style={style} flex-grow="1">F</div>
				<div style={style} flex-grow="1">G</div>
				<div style={style} flex-grow="1">H</div>
				<div style={style} flex-grow="1">I</div>
				<div style={style} flex-grow="1">J</div>
				<div style={style} flex-grow="1">K</div>
				<div style={style} flex-grow="1">L</div>
				<div style={style} flex-grow="1">M</div>
				<div style={style} flex-grow="1">N</div>
				<div style={style} flex-grow="1">O</div>
		</div>
		);
	}
}

export default App;

```
### Output
