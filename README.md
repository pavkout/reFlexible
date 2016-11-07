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

```html
		<div style="height: 800px; width: 100%; display: flex; flex-direction: row; align-items: center; justify-content: center;">
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(182, 142, 223); flex-direction: row; align-self: flex-end; flex: 4 1 0%;">1</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(66, 13, 0); flex-direction: row; order: 1; flex-grow: 1;">2</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(145, 184, 223); flex-direction: row; order: 2; flex-grow: 2;">3</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(173, 90, 60); flex-direction: row; flex-grow: 1; flex-basis: 200px;">4</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(164, 128, 34); flex-direction: row; flex-grow: 1;">5</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(50, 84, 225); flex-direction: row; flex-grow: 1;">6</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(46, 18, 59); flex-direction: row; flex-grow: 1;">7</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(38, 143, 28); flex-direction: row; flex-grow: 1;">8</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(60, 146, 208); flex-direction: row; flex-grow: 1;">9</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(252, 207, 29); flex-direction: row; flex-grow: 1;">10</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(76, 142, 186); flex-direction: row; flex-grow: 1;">11</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(251, 17, 214); flex-direction: row; flex-grow: 1;">12</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(182, 174, 213); flex-direction: row; flex-grow: 1;">13</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(99, 154, 2); flex-direction: row; flex-grow: 1;">14</div>
		<div style="padding: 4px; margin: 10px; text-align: center; color: white; background-color: rgb(159, 12, 79); flex-direction: row; flex-grow: 1;">15</div>
	</div>
```
