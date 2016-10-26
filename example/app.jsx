import React, { Component } from 'react';
import Constants from 'constants';

import FlexBox from '../src/components/flexBox/flexBox';

class App extends Component {
	render() {
		return (
      <FlexBox
        justifyContent={Constants.justifyContent.center}
        alignItems={Constants.alignItems.center}
        flexDirection={Constants.flexDirection.column}
      >
        <img src="./img/React.png"/>
        <img src="./img/React.png"/>
        <img src="./img/React.png"/>
        <img src="./img/React.png"/>
      </FlexBox>
		);
	}
}

export default App;
