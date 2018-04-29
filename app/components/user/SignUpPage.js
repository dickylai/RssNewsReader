import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import Message from './Message';
import { signUpRequest } from '../../actions/signUpActions';

class SignUpPage extends Component {

  render() {
    const {
      signUpRequest,
      handleSubmit,
      signUp: {
        requesting,
        successful,
        messages,
        errors
      }
    } = this.props;

    return (
      <div className="row mt-3">
        <form className="offset-3 col-6 border" onSubmit={handleSubmit(signUpRequest)}>
          <legend className="my-3">RSS News Reader - Sign Up</legend>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              className="form-control"
              label="confirmPassword"
              component="input"
            />
          </div>
          <button action="submit" className="btn btn-primary mb-3">SIGNUP</button>
        </form>
      </div>
    );
  };
}

SignUpPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signUpRequest: PropTypes.func.isRequired,
  signUp: PropTypes.shape({
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
    messages: PropTypes.array,
    errors: PropTypes.array
  })
}

const mapStateToProps = state => ({
  signUp: state.signUp
});

const connected = connect(mapStateToProps, { signUpRequest })(SignUpPage);
const formed = reduxForm({
  form: 'signUpForm'
})(connected);

export default formed;
