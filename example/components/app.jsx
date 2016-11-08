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
