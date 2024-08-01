import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      fruit: 'coconut',
      married: false
    };
  }
  handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form action='' onSubmit={this.handleSubmit}>
          <label htmlFor=''>
            Name:
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
          </label>
          <textarea name='address' value={this.state.address} onChange={this.handleChange}></textarea>
          <select name='fruit' value={this.state.fruit} onChange={this.handleChange}>
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
          <input type='checkbox' name='married' checked={this.state.married} id='' onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
