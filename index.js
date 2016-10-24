import React from 'react';
import ReactDOM from 'react-dom';
import { ReFlex } from './src/components'

ReactDOM.render(
  <ReFlex
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <input/>
    <input/>
    <input/>
    <input/>
  </ReFlex>,
 document.getElementById('app'));
