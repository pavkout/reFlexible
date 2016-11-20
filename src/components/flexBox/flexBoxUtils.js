import { mapKeys, cloneDeep } from 'lodash';
import Constants from 'constants';
import { initPropsToStyle } from 'flexUtils';

module.exports = {
  initProps: function(props) {
      if (props) {
          // Clone the props
          const cloneProps = cloneDeep(props);

          return {
              style: {
                ...props.style || {},
                ...initPropsToStyle(cloneProps)
              }
          };
      }
      return {};
  },

  deleteFlexBoxProps: function(props) {
    if (!props && props === undefined) { return null; }

    return mapKeys(props, (value, key) => {
      if (key in Constants) { delete props.key; }
    });
  }
};
