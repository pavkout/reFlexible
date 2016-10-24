import React, {Component} from 'react';

class ReFlex extends Component {
  constructor(props) {
    super(props);

    // Set up initial state
    this.state = {
      text: props.initialValue || 'placeholder'
    };

    // Functions must be bound manually with ES6 classes
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
        Type something:
        <input onChange={this.handleChange}
               value={this.state.text} />
      </div>
    );
  }
}

ReFlex.propTypes = {
  initialValue: React.PropTypes.string
};
ReFlex.defaultProps = {
  initialValue: ''
};

export default ReFlex;
