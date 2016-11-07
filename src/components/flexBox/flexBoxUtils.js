import { mapKeys, cloneDeep } from 'lodash';
import Constants from 'constants';
import {
  initFlexDirection,
  initAlignItems,
  initJustifyContent,
  initAlignSelf,
  initOrder,
  initFlexGrow,
  initFlexShrink,
  initFlexBasis,
  initFlex
} from 'flexUtils';

module.exports = {
  initProps: function(props) {
      if (props) {
          // Init a style object
          const style = {};
          // Clone the props
          const cloneProps = cloneDeep(props);

          return {
              style: {
                ...props.style || {},
                ...initFlexDirection(style, cloneProps),
                ...initAlignItems(style, cloneProps),
                ...initJustifyContent(style, cloneProps),
                ...initAlignSelf(style, cloneProps),
                ...initOrder(style, cloneProps),
                ...initFlexGrow(style, cloneProps),
                ...initFlexShrink(style, cloneProps),
                ...initFlexBasis(style, cloneProps),
                ...initFlex(style, cloneProps)
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
