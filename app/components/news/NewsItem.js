import React, { Component } from 'react';

import ShareButton from '../buttons/ShareButton';
import MoreButton from '../buttons/MoreButton';

class NewsItem extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.title}
        </div>
        <ShareButton />
        <MoreButton />
      </div>
    );
  }
}

export default NewsItem;
