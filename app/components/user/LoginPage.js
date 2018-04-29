import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Message from './Message';
import { loginRequest } from '../../actions/loginActions';

class LoginPage extends Component {

  render() {
    const {
      loginRequest,
      handleSubmit,
      login: {
        requesting,
        successful,
        messages,
        errors
      }
    } = this.props;

    return (
      <div className="row mt-3">
        <form className="offset-3 col-6 border" onSubmit={handleSubmit(loginRequest)}>
          <legend className="my-3">RSS News Reader - Login</legend>
          <div>
            {!requesting && !!errors.length &&
              errors.map((error, i) => (
                <Message key={error.time} message={error.body} type="danger"/>
              ))
            }
            {
              !requesting && !!messages.length &&
              messages.map((message, i) => (
                <Message key={message.time} message={message.body} type="success"/>
              ))
            }
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              id="email"
              className="form-control"
              label="Email"
              component="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              id="password"
              className="form-control"
              label="password"
              component="input"
            />
          </div>
          <div className="row">
            <div className="col-2">
              <button action="submit" className="btn btn-primary mb-3">LOGIN</button>
            </div>
            <div className="col-6 mt-1">
              {requesting && <p>Logging in...</p>}
              {!requesting && !successful && (
                <Link to="/signup">Need to Signup? Click Here »</Link>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  };
}

LoginPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginRequest: PropTypes.func.isRequired,
  login: PropTypes.shape({
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
    messages: PropTypes.array,
    errors: PropTypes.array
  })
}

const mapStateToProps = state => ({
  login: state.login
});

const connected = connect(mapStateToProps, { loginRequest })(LoginPage);
const formed = reduxForm({
  form: 'loginForm'
})(connected);

export default formed;
