import React, { Component } from 'react';

export default class BoilingVerdict extends Component {
  render() {
    return <div>{this.props.celsius >= 100 ? 'The water would boild' : 'The water would not boild'}</div>;
  }
}
