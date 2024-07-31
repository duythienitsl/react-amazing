import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleChange = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div>
        <form action=''>
          <label htmlFor=''>
            Name:
            <input type='text' name='name' onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
