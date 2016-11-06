import React, {Component} from 'react';
import Constants from 'constants';
import supportFlexbox from 'browserSupportUtils';
import initProps from 'reFlexibleUtils';

import './reFlexible.post.css';

class ReFlexible extends Component {

  constructor(props) {
    super(props);
    if (!supportFlexbox()) {
      console.error('Flex display are not supported');
    }
  }

  render() {
    const flexClasses = initProps(this.props);
    return (
      <div className={ flexClasses }>
        {this.props.children}
      </div>
    );
  }
}
export default ReFlexible;
