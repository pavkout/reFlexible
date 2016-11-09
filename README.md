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

|   |   |   |   |
|:-:|:-:|:-:|:-:|
|   |   |   |   |
|   |   |   |   |


| Prop  | Type  | Description  | Value  |
|:-|:-:|:-:|:-:|
| flexible  | bool  | Set the display flex  | display: flex;  |
| inline-flexible <br> inlineFlexible  | bool  | Set the display inline-flex  | display: inline-flex; |
|column |bool| Set the direction from items, <br> default is row direction | flex-direction: column; |
|reverse |bool| Reverse the direction from items| flex-direction: column-reverse; <br> or <br> flex-direction: row-reverse; |
|wrap |bool| Change the wrapping from items <br> by default is noWrap | flex-Wrap: wrap; |
|wrap-reverse <br> wrapReverse |bool| Revert the wrapping from items <br> by default is noWrap | flex-Wrap: wrap-reverse; |
|startJustified <br> start-justified|bool| |justify-content: flex-start;|
|centerJustified <br> center-justified|bool| |justify-content: center;|
|endJustified <br> end-justified|bool| |justify-content: flex-end;|
|betweenJustified <br> between-justified|bool| |justify-content: space-between;|
|aroundJustified <br> around-justified|bool| |justify-content: space-around;|
|alignCenter <br> align-center|bool| |align-items: center;|
|alignStart <br> align-start|bool| |align-items: flex-start;|
|alignEnd <br> align-end|bool| |align-items: flex-end;|
|alignStretch <br> align-stretch|bool| |align-items: stretch;|
|alignBaseline <br> align-baseline|bool| |align-items: baseline;|
|contentCenter <br> content-center|bool| |align-content: center;|
|contentStart <br> content-start|bool| |align-content: flex-start;|
|contentEnd <br> content-start|bool| |align-content: flex-end;|
|contentStretch <br> content-stretch|bool| |align-content: stretch;|
|contentSpace <br> content-space|bool| |align-content: space-between;|
|contentAround <br> content-around|bool| |align-content: space-around;|
|selfStart <br> self-start|bool| |align-self: flex-start;|
|selfCenter <br> self-center|bool| |align-self: center;|
|selfEnd <br> self-end|bool| |align-self: flex-end;|
|selfStretch <br> self-stretch|bool| |align-self: stretch;|
|selfBaseline <br> self-baseline|bool| |align-self: baseline;|
|selfAuto <br> self-auto|bool| |align-self: auto;|
|order| number <br> or <br>string | |order: 1;|
|flexGrow <br> flex-grow| number <br> or <br>string| |flex-grow: 1;|
|flexShrink <br> flex-shrink| number <br> or <br>string| |flex-shrink: 1;|
|flexBasis <br> flex-basis| number <br> or <br>string| |flex-basis: 20px;|
|flex| number <br> or <br>string| |flex: 0 1 auto;|


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
