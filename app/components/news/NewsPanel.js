import React, { Component } from 'react';
import NewsItem from "./NewsItem";

import '../../styles/styles.css';

class NewsPanel extends Component {
  render() {
    return (
      <div className="inlineContainer">
        <NewsItem title="1"/>
        <NewsItem title="2"/>
        <NewsItem title="3"/>
      </div>
    );
  }
}

export default NewsPanel;
