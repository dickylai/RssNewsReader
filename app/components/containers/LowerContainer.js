import React, { Component } from 'react';
import FilterPanel from '../filters/FilterPanel';
import NewsPanel from '../news/NewsPanel';

class LowerContainer extends Component {
  render() {
    return (
      <div>
        <FilterPanel />
        <NewsPanel />
      </div>
    );
  }
}

export default LowerContainer;
