import React from 'react';

// function Welcome(props) {
//   return <h1>{...props}</h1>;
// }

class Welcome extends React.Component {
  render() {
    return (
      <h1>
        Hello ,{this.props.name} - {this.props.age}
      </h1>
    );
  }
}

export default Welcome;
