import React from 'react';

const cars = ['BMV', 'HONDA', 'TOYOTA'];

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cars);
    }, 1000);
  });
};

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      lists: [],
      darkMode: false
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }));
  };
  getTime = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  };

  componentDidMount() {
    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res
      }))
    );
  }

  componentDidUpdate() {
    if (this.state.darkMode) {
      const value = document.querySelector('input').value;
      console.log('Value in input is: ', value);
    }
  }
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2 id='time'>It's: {this.state.time}</h2>
        <button onClick={this.getTime}>Get Time</button>
        <button onClick={this.toggleDarkMode}>Toggle</button>
        {this.state.darkMode && <input value={this.state.darkMode} />}
      </div>
    );
  }
}
