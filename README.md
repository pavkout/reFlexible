# ReFlexible

React flexbox layout

## Getting Started

```
npm install reFlexible
```

## Issues

Please [Open issue](https://github.com/pavkout/reFlexible/issues), describe bug, suggest solution

##USAGE

###Containers (Rows & columns)

Available props:

| Prop         	| Type            	| Description                                                                                                                                   	| Values                                                                                                                                                              	|
|--------------	|-----------------	|-----------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| align        	| String          	| Sets the align-items alignement on the flex axis                                                                                              	| flex-start, flex-end, center, baseline, stretch (default)                                                                                                           	|
| className    	| String          	| A Classname being passed to the flex container. If responsive breakpoints are set, the current breakpoint value is appended to the className. 	| Any                                                                                                                                                                 	|
| itemDefaults 	| Object          	| Allows to pass default props to all the child Items.                                                                                          	| An object of Item props.                                                                                                                                            	|
| justify      	| String          	| Sets the justify-content flex property                                                                                                        	| flex-start, flex-end, center, space-between, space-around                                                                                                           	|
| noWrap       	| Bool            	| Sets the flex-wrap property to nowrap                                                                                                         	| By default, in order to support responsive layouts all the containers are set to wrap, if you wish to override this behavior set this prop to true.                 	|
| reverse      	| Bool            	| Reverses the container's flex-direction                                                                                                       	|                                                                                                                                                                     	|
| size         	| Number or String 	| Sets the flex property                                                                                                                        	| If a number is provided (1), the flex shorthand property is set: flex: 1, if a width is provided ('20%'), the flex shortahnd property is set as follows flex: 1 10% 	|
| small        	| Number or String 	| Sets and override the size property when the small breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the small breakpoint is active.                                                                         	|
| medium        	| Number or String 	| Sets and override the size property when the medium breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the medium breakpoint is active.                                                                         	|
| large        	| Number or String 	| Sets and override the size property when the large breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the large breakpoint is active.                                                                         	|
| wide        	| Number or String 	| Sets and override the size property when the wide breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the wide breakpoint is active.                                                                         	|

###Items

Available props:

| Prop         	| Type            	| Description                                                                                                                                   	| Values                                                                                                                                                              	|
|--------------	|-----------------	|-----------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| align        	| String          	| Sets the align-self alignement on the flex axis                                                                                              	| flex-start, flex-end, center, baseline, stretch (default)                                                                                                           	|
| className    	| String          	| A Classname being passed to the flex container. If responsive breakpoints are set, the current breakpoint value is appended to the className. 	| Any                                                                                                                                                                 	|
| order        	| Number          	| Sets the order flex property                                                                                                                  	| 1, 2, 3, ...                                                                                                                                                        	|
| size         	| Number or String 	| Sets the flex property                                                                                                                        	| If a number is provided (1), the flex shorthand property is set: flex: 1, if a width is provided ('20%'), the flex shortahnd property is set as follows flex: 1 10% 	|
| small        	| Number or String 	| Sets and override the size property when the small breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the small breakpoint is active.                                                                         	|
| medium        	| Number or String 	| Sets and override the size property when the medium breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the medium breakpoint is active.                                                                         	|
| large        	| Number or String 	| Sets and override the size property when the large breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the large breakpoint is active.                                                                         	|
| wide        	| Number or String 	| Sets and override the size property when the wide breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the wide breakpoint is active.                                                                         	|

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

![snapshot.png](https://s13.postimg.org/p4qqhbexj/snapshot.png)
