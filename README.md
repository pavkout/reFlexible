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

class App extends Component {
	render() {

		const style = {
			padding: 4,
			margin: 10,
			width: '150px',
			height: '150px',
			textAlign: 'center',
		  color: 'white',
			backgroundColor: '#6666ff',
			border: '1px solid black'
		};

		const styleChild = {
			width: '25px',
			height: '25px',
			backgroundColor: 'white',
			margin: '2px'
		};

		return (
			<div reflexible column style={{height: '800px', width: '100%', border: '2px solid black'}}>
				<div reflexible center justified style={{height: '200px', width: '100%', 'borderBottom': '2px solid black'}}>
					<div reflexible style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible centerJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible endJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible aroundJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible justified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
				</div>
				<div reflexible center justified style={{height: '200px', width: '100%', 'borderBottom': '2px solid black'}}>
					<div reflexible center style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible center centerJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible center endJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible center aroundJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible center justified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
				</div>
				<div reflexible center justified style={{height: '200px', width: '100%', 'borderBottom': '2px solid black'}}>
					<div reflexible end style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible end centerJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible end endJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible end aroundJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible end justified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
				</div>
				<div reflexible center justified style={{height: '200px', width: '100%'}}>
					<div reflexible end style={style}>
						<div selfStart style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible end centerJustified style={style}>
						<div style={styleChild} />
						<div selfCenter style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible end endJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div selfEnd style={styleChild} />
					</div>
					<div reflexible end aroundJustified style={style}>
						<div style={styleChild} />
						<div selfStretch style={styleChild} />
						<div style={styleChild} />
					</div>
					<div reflexible end justified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

```
### Output

![snapshot.png](https://s16.postimg.org/fk78g8pvp/snapshot.png)
