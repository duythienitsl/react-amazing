import React, { Component } from 'react';

export default class CorrectlyState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    console.log(this.state.count);
    return <div>CorrectlyState, Count: {this.state.count}</div>;
  }
}
