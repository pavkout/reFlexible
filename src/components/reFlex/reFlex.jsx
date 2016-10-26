import React, {Component} from 'react';
import Constants from 'constants';

class ReFlex extends Component {

  getStyles() {

    const {
      justifyContent,
      alignItems,
      flexDirection,
      flexWrap,
      flexGrow,
      flexFlow,
      flexShrink,
      flexBasis,
      flex,
    } = this.props;

    return {
        display: 'flex',
        justifyContent: justifyContent ? justifyContent : 'none',
        alignItems: alignItems ? alignItems : 'none',
        flexDirection: flexDirection ? flexDirection : 'none',
        flexWrap: flexWrap ? flexWrap : 'none',
        flexGrow: flexGrow ? flexGrow : 'none',
        flexFlow: flexFlow ? flexFlow : 'none',
        flexShrink: flexShrink ? flexShrink : 'none',
        flexBasis: flexBasis ? flexBasis : 'none',
        flex: flex ? flex : 'none',
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { className } = this.props;
    const styles = this.getStyles();

    return (
      <div
        className={className ? className : ''}
        style={styles}
      >
        {this.props.children}
      </div>
    );
  }
}

ReFlex.propTypes = {
  justifyContent: React.PropTypes.oneOf(Object.keys(Constants.justifyContent).map(key => { return key; })),
  alignItems: React.PropTypes.oneOf(Object.keys(Constants.alignItems).map(key => { return key; })),
  flexDirection: React.PropTypes.oneOf(Object.keys(Constants.flexDirection).map(key => { return key; })),
  flexWrap: React.PropTypes.oneOf(Object.keys(Constants.flexWrap).map(key => { return key; })),
  flexGrow: React.PropTypes.string,
  flexFlow: React.PropTypes.string,
  flexShrink: React.PropTypes.string,
  flexBasis: React.PropTypes.string,
  flex: React.PropTypes.string,
  children: React.PropTypes.any
};

ReFlex.defaultProps = {
  flexDirection: 'row',
  flexWrap: 'nowrap'
};

export default ReFlex;
