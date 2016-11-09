import { mapKeys, cloneDeep } from 'lodash';
import Constants from 'constants';
import normalize from 'react-style-normalizer';

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
          // Clone the props
          const cloneProps = cloneDeep(props);

          return {
              style: normalize({
                ...props.style || {},
                ...initFlexible(cloneProps),
                ...initFlexDirection(cloneProps),
                ...initWrap(cloneProps),
                ...initJustifyContent(cloneProps),
                ...initAlignItems(cloneProps),
                ...initAlignContent(cloneProps),
                ...initAlignSelf(cloneProps),
                ...initOrder(cloneProps),
                ...initFlexGrow(cloneProps),
                ...initFlexShrink(cloneProps),
                ...initFlexBasis(cloneProps),
                ...initFlex(cloneProps)
              })
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
