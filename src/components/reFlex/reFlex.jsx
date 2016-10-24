import React, {Component} from 'react';

class ReFlex extends Component {

  getStyles(props) {

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
      flex: {
        display: 'flex',
        justifyContent: justifyContent ? justifyContent : null,
        alignItems: alignItems ? alignItems : null,
        flexDirection: flexDirection ? flexDirection : null,
        flexWrap: flexWrap ? flexWrap : null,
        flexGrow: flexGrow ? flexGrow : null,
        flexFlow: flexFlow ? flexFlow : null,
        flexShrink: flexShrink ? flexShrink : null,
        flexBasis: flexBasis ? flexBasis : null,
        flex: flex ? flex : null,
      }
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
        style={styles.flex}
      >
        {this.props.children}
      </div>
    );
  }
}

ReFlex.propTypes = {
  justifyContent: React.PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-around', 'space-between']),
  alignItems: React.PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'baseline', 'stretch']),
  flexDirection: React.PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  flexWrap: React.PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
  flexGrow: React.PropTypes.string,
  flexFlow: React.PropTypes.string,
  flexShrink: React.PropTypes.string,
  flexBasis: React.PropTypes.string,
  flex: React.PropTypes.string,
  children: React.PropTypes.any
};

ReFlex.defaultProps = {
};

export default ReFlex;
