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
				<div style={style} self-end flex="4">1</div>
				<div style={style} order="1" flex-grow="1">2</div>
				<div style={style} order="2" flex-grow="2">3</div>
				<div style={style} flex-grow="1" flex-basis="200px">4</div>
				<div style={style} flex-grow="1">5</div>
				<div style={style} flex-grow="1">6</div>
				<div style={style} flex-grow="1">7</div>
				<div style={style} flex-grow="1">8</div>
				<div style={style} flex-grow="1">9</div>
				<div style={style} flex-grow="1">10</div>
				<div style={style} flex-grow="1">11</div>
				<div style={style} flex-grow="1">12</div>
				<div style={style} flex-grow="1">13</div>
				<div style={style} flex-grow="1">14</div>
				<div style={style} flex-grow="1">15</div>
		 </div>
		);
	}
}

export default App;

```
### Output
