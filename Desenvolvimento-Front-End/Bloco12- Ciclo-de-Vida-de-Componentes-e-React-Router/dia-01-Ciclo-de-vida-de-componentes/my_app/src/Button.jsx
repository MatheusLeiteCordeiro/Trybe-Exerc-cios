import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { toggleTimer, textButton } = this.props;
    return (
      <button type="button" onClick={ toggleTimer }>
        { textButton }
      </button>
    );
  }
}

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  toggleTimer: PropTypes.func.isRequired,
};

export default Button;