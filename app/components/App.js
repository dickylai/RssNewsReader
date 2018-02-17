import React, { Component } from 'react';
import UpperContainer from './containers/UpperContainer';
import LowerContainer from './containers/LowerContainer';

class App extends Component {
  render() {
    return (
      <div>
        <UpperContainer />
        <LowerContainer />
      </div>
    );
  }
}

export default App;
