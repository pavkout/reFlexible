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
import FlexBox from 'flexBox';

import './app.post.css';

class App extends Component {
	getRandomColor() {
		return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	}

	getDiferentColors(style) {
			let color = this.getRandomColor();
			while (color === 'white') {
				color = this.getRandomColor();
			}
			return {
					...style,
					backgroundColor: color
			}
	}

	render() {

		const style = {
			padding: 4,
			margin: 10,
			textAlign: 'center',
		  color: 'white'
		};

		return (
			<div reflexible center centerJustified style={{height: '800px', width: '100%'}}>
				<div style={this.getDiferentColors(style)} self-end flex="4">1</div>
				<div style={this.getDiferentColors(style)} order="1" flex-grow="1">2</div>
				<div style={this.getDiferentColors(style)} order="2" flex-grow="2">3</div>
				<div style={this.getDiferentColors(style)} flex-grow="1" flex-basis="200px">4</div>
				<div style={this.getDiferentColors(style)} flex-grow="1">5</div>
				<div style={this.getDiferentColors(style)} flex-grow="1">6</div>
				<div style={this.getDiferentColors(style)} flex-grow="1">7</div>
				<div style={this.getDiferentColors(style)} flex-grow="1">8</div>
				<div style={this.getDiferentColors(style)} flex-grow="1">9</div>
				<div style={this.getDiferentColors(style)} flex-grow="1">10</div>
				<div style={this.getDiferentColors(style)} flex-grow="1">11</div>
				<div style={this.getDiferentColors(style)} flex-grow="1">12</div>
				<div style={this.getDiferentColors(style)} flex-grow="1">13</div>
				<div style={this.getDiferentColors(style)} flex-grow="1">14</div>
				<div style={this.getDiferentColors(style)} flex-grow="1">15</div>
		</div>
		);
	}
}

export default App;

```
### Output

```
[![snapshot.png](https://s13.postimg.org/p4qqhbexj/snapshot.png)](https://postimg.org/image/3v346gymr/)

```
