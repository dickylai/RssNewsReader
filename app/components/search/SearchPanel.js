import React, { Component } from 'react';
import '../../styles/searchPanel.css';

class SearchPanel extends Component {
  render() {
    return (
      <div className="panel">
        <input className="searchBar" placeholder="Input here to search..."/>
      </div>
    );
  }
}

export default SearchPanel;
