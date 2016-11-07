import React  from 'react';
import ReactElement  from 'react/lib/ReactElement';
import { initProps, createDataAttributesFromProps } from 'flexBoxUtils';

const originalCreateElement = React.createElement;

React.createElement = function(type, props) {
  // Clone the props
  const cloneProps = props;

  //Use this function to convert props into html data attributes
  props = createDataAttributesFromProps(cloneProps);

  const args = arguments;

  if (props && typeof type === 'string') {
      props = {
        ...props,
        ...initProps(cloneProps)
      }
  }
  return originalCreateElement.apply(this, [type, props].concat(Array.prototype.slice.call(args, 2)));
};

module.exports = {};
