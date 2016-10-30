import React, { Component } from 'react';
import Constants from 'constants';
import './app.post.css';

import FlexBox from 'flexBox';

class App extends Component {
	render() {
		return (
			<div>
				<FlexBox
					className="app-container"
	        justifyContent={Constants.justifyContent.center}
	        alignItems={Constants.alignItems.center}
	        flexDirection={Constants.flexDirection.column}
	      >
					<div className="container">
						<img src="./img/React.png"/>
					</div>
					<div className="container">
						<img src="./img/React.png"/>
					</div>
					<div className="container">
						<img src="./img/React.png"/>
					</div>
					<div className="container">
						<img src="./img/React.png"/>
					</div>
				</FlexBox>
				<FlexBox
					justifyContent={Constants.justifyContent.center}
					alignItems={Constants.alignItems.center}
				>
					<span>Configuration</span>
					<ul>
						<li><span>display: flex</span></li>
						<li><span>justify-content: center</span></li>
						<li><span>align-items: center</span></li>
						<li><span>flex-direction: column</span></li>
					</ul>
				</FlexBox>
			</div>
		);
	}
}

export default App;
