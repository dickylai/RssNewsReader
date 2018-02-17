import React, { Component } from 'react';
import UserPanel from '../user/UserPanel';
import SearchPanel from '../search/SearchPanel';

class UpperContainer extends Component {
  render() {
    return (
      <div>
        <UserPanel />
        <SearchPanel />
      </div>
    );
  }
}

export default UpperContainer;
