import React, { Component } from 'react';
import Constants from 'constants';

import ReFlex from 'reFlex';

class App extends Component {
	render() {
		return (
      <ReFlex
        justifyContent={Constants.justifyContent.center}
        alignItems={Constants.alignItems.center}
        flexDirection={Constants.flexDirection.column}
      >
        <input/>
        <input/>
        <input/>
        <input/>
      </ReFlex>
		);
	}
}

export default App;
