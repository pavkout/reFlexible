import React, { Component } from 'react';
import Constants from 'constants';

import FlexBox from 'flexBox';

class App extends Component {
	render() {
		return (
      <FlexBox
        justifyContent={Constants.justifyContent.center}
        alignItems={Constants.alignItems.center}
        flexDirection={Constants.flexDirection.column}
      >
        <input/>
        <input/>
        <input/>
        <input/>
      </FlexBox>
		);
	}
}

export default App;
