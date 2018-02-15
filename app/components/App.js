import React, { Component } from 'react';
import NewsPanel from "./news/NewsPanel";

class App extends Component {
  render() {
    return (
      <div>
        <p>This is the content.</p>
        <NewsPanel />
      </div>
    );
  }
}

export default App;
