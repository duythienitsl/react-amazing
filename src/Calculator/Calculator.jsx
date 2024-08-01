import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

const tryConvert = (temperator, scaleInput) => {
  const input = parseFloat(temperator);
  if (Number.isNaN(input)) {
    return '';
  }
  let output;

  if ((scaleInput = 'f')) {
    output = (input - 32) / 1.8;
  } else {
    output = input * 1.8 + 32;
  }

  console.log('scaleInput====', scaleInput);

  output = Math.round(output * 1000) / 1000;

  console.log('output====', output);
  return output;
};

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperator: '',
      scale: 'c'
    };
  }
  handleChange = (scale) => (value) => {
    this.setState({
      temperator: value,
      scale
    });
  };

  render() {
    const { scale, temperator } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperator, scale) : temperator;
    const fahrenheit = scale === 'c' ? tryConvert(temperator, scale) : temperator;
    return (
      <div>
        <TemperatureInput title='Celsiou' temperature={celsius} onTemperatureChange={this.handleChange('c')} />
        <TemperatureInput title='Fahrenheit' temperature={fahrenheit} onTemperatureChange={this.handleChange('f')} />
        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}
