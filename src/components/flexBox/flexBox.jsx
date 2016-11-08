import React  from 'react';
import { initProps, deleteFlexBoxProps } from 'flexBoxUtils';
import supportFlexbox from 'browserSupportUtils';

// Check if flexbox are supported in browser else print an error in console
const supportsCSS = !!((window.CSS && window.CSS.supports) || window.supportsCSS || false);
let supportsFlex = false;

if (supportsCSS) {
  supportsFlex = CSS.supports("display", "flex");
} else if (!supportFlexbox()) {
  supportsFlex = false;
}

if (!supportsFlex) {
  console.error('Flex display are not supported');
}

const originalCreateElement = React.createElement;

React.createElement = function(type, props) {
  // Clone the props
  const cloneProps = props;

  //Use this function to convert props into html data attributes
  props = deleteFlexBoxProps(props);

  //Delete undefined props if exist
  delete props.undefined;

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
