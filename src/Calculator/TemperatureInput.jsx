import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TemperatureInput extends Component {
  handleChange = (event) => {
    this.props.onTemperatureChange(event.target.value);
  };
  render() {
    const { title, temperature } = this.props;
    return (
      <div>
        <fieldset>
          {' '}
          <legend>Enter temperator in {title}</legend>
          <input type='text' value={temperature} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

TemperatureInput.propTypes = {
  onTemperatureChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  temperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
