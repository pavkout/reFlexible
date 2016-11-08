import { mapKeys, cloneDeep } from 'lodash';
import Constants from 'constants';
import {
  initFlexible,
  initFlexDirection,
  initWrap,
  initJustifyContent,
  initAlignItems,
  initAlignContent,
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
                ...initFlexible(style, cloneProps),
                ...initFlexDirection(style, cloneProps),
                ...initWrap(style, cloneProps),
                ...initJustifyContent(style, cloneProps),
                ...initAlignItems(style, cloneProps),
                ...initAlignContent(style, cloneProps),
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
