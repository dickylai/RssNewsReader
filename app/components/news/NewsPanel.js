import React, { Component } from 'react';
import NewsItem from "./NewsItem";

class NewsPanel extends Component {
  render() {
    return (
      <div style={{display:'inline-block'}}>
        <NewsItem title="1"/>
        <NewsItem title="2"/>
        <NewsItem title="3"/>
      </div>
    );
  }
}

export default NewsPanel;
