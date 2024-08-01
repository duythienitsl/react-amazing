import React, { Component } from 'react';

export default class TemperatureInput extends Component {
  constructor(props) {
    super(props);
  }
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
