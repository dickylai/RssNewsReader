import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import { connect } from 'react-redux';

class AuthCheck extends Component {
  render() {
    const {user: { token }, to, redirectTo, auth, toComponent: Component} = this.props;
    return (
      <Route
        path={to}
        render={(props) => token && auth !== false
          ? <Redirect to={redirectTo} />
          : <Component {...props}/>
        }
      />
    );
  }
}

AuthCheck.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.Object
  }),
  toComponent: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AuthCheck);;
