import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

NewsItem.propTypes = {
  title: PropTypes.string
};

export default NewsItem;
