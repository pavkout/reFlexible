import React, { Component } from 'react';
import ReactElement  from 'react/lib/ReactElement';
import ReFlexible from 'reFlexible';
import './app.post.css';

class AppClasses extends Component {
	render() {
		return (
			<ReFlexible className="pavkout" reFlexible column justifyCenter>
					<ReFlexible reFlexible justifyCenter>
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
				</ReFlexible>
				<ReFlexible reFlexible spaceAround>
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
				</ReFlexible>
		</ReFlexible>
		);
	}
}

export default AppClasses;
