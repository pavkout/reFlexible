module.exports = {
  // Container Attribute: flex-direction
  initFlexDirection: function(style, props) {
    style = props.reflexible ? { display: "flex" } : {}

    if (props.column) {
        style.flexDirection = style.WebkitFlexDirection = props.reverse ? "column-reverse" : "column";
    } else {
        style.flexDirection = style.WebkitFlexDirection = props.reverse ? "row-reverse" : "row";
    }

    if (props.wrap) {
        style.flexWrap = "wrap";
    }

    return style;
  },

  // Container Attribute: align-items
  initAlignItems: function(style, props) {
    if (props.center) {
        style.alignItems = "center";
    } else if (props.start) {
        style.alignItems = "flex-start";
    } else if (props.end) {
        style.alignItems = "flex-end";
    } else if (props.stretch) {
        style.alignItems = "stretch";
    }
    return style;
  },

  // Container Attribute: justify-content
  initJustifyContent: function(style, props) {
    if (props["startJustified"] || props["start-justified"]) {
        style.justifyContent = "flex-start";
    } else if (props["centerJustified"] || props["center-justified"]) {
        style.justifyContent = "center";
    } else if (props["endJustified"] || props["end-justified"]) {
        style.justifyContent = "flex-end";
    } else if (props["justified"]) {
        style.justifyContent = "space-between";
    } else if (props["aroundJustified"] || props["around-justified"]) {
        style.justifyContent = "space-around";
    }
    return style;
  },

  // Container Attribute: align-content

  // Item Attribute: align-self
  initAlignSelf: function(style, props) {
    if (props["selfStart"] || props["self-start"]) {
        style.alignSelf = "flex-start";
    } else if (props["selfCenter"] || props["self-center"]) {
        style.alignSelf = "center";
    } else if (props["selfEnd"] || props["self-end"]) {
        style.alignSelf = "flex-end";
    } else if (props["selfStretch"] || props["self-stretch"]) {
        style.alignSelf = "stretch";
    }
    return style;
  },

  // Item Attribute: order
  initOrder: function(style, props) {
    if (props.order) {
        style.order = props.order;
    }
    return style;
  },

  // Item Attribute: flex-grow
  initFlexGrow: function(style, props) {
    if (props["flexGrow"] || props["flex-grow"]) {
        style.flexGrow = props["flexGrow"] || props["flex-grow"];
    }
    return style;
  },

  // Item Attribute: flex-shrink
  initFlexShrink: function(style, props) {
    if (props["flexShrink"] || props["flex-shrink"]) {
        style.flexShrink = props["flexShrink"] || props["flex-shrink"];
    }
    return style;
  },

  // Item Attribute: flex-basis
  initFlexBasis: function(style, props) {
    if (props["flexBasis"] || props["flex-basis"]) {
        style.flexBasis = props["flexBasis"] || props["flex-basis"];
    }
    return style;
  },

  // Item Attribute: flex
  initFlex: function(style, props) {
    if (typeof(props.flex) === "number") {
        style.flexGrow = props.flex;
    } else if (typeof(props.flex) === "string") {
        style.flex = props.flex;
    } else if (props.flex) {
        style.flex = "1 1 auto";
    }
    return style;
  }
};
