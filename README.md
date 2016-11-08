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
			<div flexible column style={{height: '800px', width: '100%', border: '2px solid black'}}>
				<div flexible alignCenter justified style={{height: '200px', width: '100%', 'borderBottom': '2px solid black'}}>
					<div flexible style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible centerJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible endJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible aroundJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible justified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
				</div>
				<div flexible alignCenter justified style={{height: '200px', width: '100%', 'borderBottom': '2px solid black'}}>
					<div flexible alignCenter style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible alignCenter centerJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible alignCenter endJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible alignCenter aroundJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible alignCenter justified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
				</div>
				<div flexible alignCenter justified style={{height: '200px', width: '100%', 'borderBottom': '2px solid black'}}>
					<div flexible alignEnd style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible alignEnd centerJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible alignEnd endJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible alignEnd aroundJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible alignEnd justified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
				</div>
				<div flexible alignCenter justified style={{height: '200px', width: '100%'}}>
					<div flexible alignEnd style={style}>
						<div selfStart style={styleChild} />
						<div style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible alignEnd centerJustified style={style}>
						<div style={styleChild} />
						<div selfalignCenter style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible alignEnd endJustified style={style}>
						<div style={styleChild} />
						<div style={styleChild} />
						<div selfEnd style={styleChild} />
					</div>
					<div flexible alignEnd aroundJustified style={style}>
						<div style={styleChild} />
						<div selfStretch style={styleChild} />
						<div style={styleChild} />
					</div>
					<div flexible alignEnd justified style={style}>
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

### Browser Support

Broken up by "version" of flexbox:

* (new) means the recent syntax from the specification ( e.g. display: flex; )
* (tweener) means an odd unofficial syntax from 2011 ( e.g. display: flexbox; )
* (old) means the old syntax from 2009 ( e.g. display: box; )

| Chrome  | Safari  | Firefox  | Opera  | IE  | Android  | iOS  |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 20-(old)<br> 21+(new)  |  3.1+ (old) <br> 6.1+ (new) | 2-21 (old) <br> 22+ (new)  | 12.1+ (new)  | 10 (tweener) <br> 11+ (new)  | 2.1+ (old) <br> 4.4+ (new)  | 3.2+ (old) <br>7.1+ (new)  |
