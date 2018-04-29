import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { unsetUser } from '../../actions/userActions';

class UserPanel extends Component {
  render() {
    const {
      logout,
      user: {
        token
      }
    } = this.props;
    return (
      <div style={{display: 'inline-block'}}>
        <p>This is the UserPanel.</p>
        {token &&
          <button
            onClick={logout}
            className="btn btn-primary mb-3">LOGOUT</button>
        }
      </div>
    );
  }
}

UserPanel.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.Object
  })
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(unsetUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(UserPanel);
