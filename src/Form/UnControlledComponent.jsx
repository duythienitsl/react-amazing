import React, { Component, createRef } from 'react';

export default class UnControlledComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null
    };
    this.input = createRef();
    this.fileInput = createRef();
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
    console.log(this.state.selectedFile);
  };
  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input type='text' ref={this.input} />
          </label>
          <input type='file' name='avatar' ref={this.fileInput} onChange={this.onFileChange} />
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}
