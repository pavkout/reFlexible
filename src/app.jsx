import React, { Component } from 'react';

import ReFlex from 'reFlex';

class App extends Component {
	render() {
		return (
      <ReFlex
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"

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
