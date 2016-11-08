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
