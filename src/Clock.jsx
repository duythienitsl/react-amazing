import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }
  getTime = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  };

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>It's: {this.state.time}</h2>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    );
  }
}
