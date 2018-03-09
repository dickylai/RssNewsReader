import React from 'react';
import PropTypes from 'prop-types';

// Iterate over each message object and print them
// in an unordered list
const Message = ({message, type}) => {
  return (
    <div className={"alert alert-" + type}>
      {message}
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Message;
