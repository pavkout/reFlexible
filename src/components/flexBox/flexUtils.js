module.exports = {
  // Container Attribute: display
  initFlexible: function(style, props) {
    if (props.flexible) {
      style = { display: "flex" }
    } else if (props["inline"] || props["inline-flexible"] || props["inlineFlexible"]) {
      style = { display: "inline-flex" }
    } else {
      style = {}
    }

    return style;
  },

  // Container Attribute: flex-direction
  initFlexDirection: function(style, props) {
    if (props.column) {
        style.flexDirection = style.WebkitFlexDirection = props.reverse ? "column-reverse" : "column";
    } else {
        style.flexDirection = style.WebkitFlexDirection = props.reverse ? "row-reverse" : "row";
    }

    return style;
  },

  // Container Attribute: flex-Wrap
  initWrap: function(style, props) {
    if (props.wrap) {
        style.flexWrap = "wrap";
    } else if (props["wrap-reverse"] || props["wrapReverse"]){
        style.flexWrap = "wrap-reverse";
    } else {
        style.flexWrap = "nowrap";
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
    } else if (props["justified"] || props["spaceJustified"] || props["space-justified"]) {
      style.justifyContent = "space-between";
    } else if (props["aroundJustified"] || props["around-justified"]) {
      style.justifyContent = "space-around";
    }
    return style;
  },

  // Container Attribute: align-items
  initAlignItems: function(style, props) {
    if (props["alignCenter"] || props["align-center"]) {
        style.alignItems = "center";
    } else if (props["alignStart"] || props["align-start"]) {
        style.alignItems = "flex-start";
    } else if (props["alignEnd"] || props["align-end"]) {
        style.alignItems = "flex-end";
    } else if (props["alignStretch"] || props["align-stretch"]) {
        style.alignItems = "stretch";
    } else if (props["alignBaseline"] || props["align-baseline"]) {
        style.alignItems = "baseline";
    }
    return style;
  },

  // Container Attribute: align-content
  initAlignContent: function(style, props) {
    if (props["contentCenter"] || props["content-center"]) {
        style.alignContent = "center";
    } else if (props["contentStart"] || props["content-start"]) {
        style.alignContent = "flex-start";
    } else if (props["contentEnd"] || props["content-end"]) {
        style.alignContent = "flex-end";
    } else if (props["contentStretch"] || props["content-stretch"]) {
        style.alignContent = "stretch";
    } else if (props["contentSpace"] || props["content-space"]) {
        style.alignContent = "space-between";
    } else if (props["contentAround"] || props["content-around"]) {
        style.alignContent = "space-around";
    }
    return style;
  },

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
    } else if (props["selfBaseline"] || props["self-baseline"]) {
        style.alignSelf = "baseline";
    } else if (props["selfAuto"] || props["self-auto"]) {
        style.alignItems = "auto";
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
