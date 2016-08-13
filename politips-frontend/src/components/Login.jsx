import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { login } from '../actions';

import classNames from 'classnames';

const Login = React.createClass({
  getInitialState() {
    return {
      'username': '',
      'password': '',
      'generalError': null,
      'usernameError': null,
      'passwordError': null,
      'isLoggingIn': false,
    }
  },

  setUsername(e) {
    this.setState({'username': e.target.value, "usernameError": null});
  },
  setPassword(e) {
    this.setState({'password': e.target.value, "passwordError": null});
  },

  submit(e) {
    e.preventDefault();
    this.setState({"isLoggingIn": true})
    this.props.login(this.state.username, this.state.password)
    .then((err) => {
      if (!err) {
        this.props.router.push('/home');
      } else {
        this.setState({
          'usernameError': err.username,
          'passwordError': err.password,
          "generalError":  err.non_field_errors
        });
      }
    }).finally(() => {
      this.setState({"isLoggingIn": false});
    })
  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="well">
              <form onSubmit={this.submit}>
                { this.state.generalError ?
                  <div className='alert alert-danger'>
                    <ul> { this.state.generalError.map((e) => { return <li key={e}><strong>{e}</strong></li> }) } </ul>
                  </div> 
                : null}
                <div className={classNames({
                  'has-error': this.state.usernameError
                }, 'form-group')}>
                  <label>Username</label>
                  <input type="text" className="form-control" value={this.state.username} onChange={this.setUsername}/>
                  {this.state.usernameError ?
                    <span className='help-block'>
                      <ul> { this.state.usernameError.map((e) => { return <li key={e}><strong>{e}</strong></li> }) } </ul>
                    </span>
                  : null }
                </div>
                <div className={classNames({
                  'has-error': this.state.passwordError
                }, 'form-group')}>
                  <label>Password</label>
                  <input type="password" className="form-control" value={this.state.password} onChange={this.setPassword}/>
                  {this.state.passwordError ?
                    <span className='help-block'>
                      <ul> { this.state.passwordError.map((e) => { return <li key={e}><strong>{e}</strong></li> }) } </ul>
                    </span>
                  : null }
                </div>
                <div>
                  <button disabled={this.state.isLoggingIn} type='submit' className='btn btn-primary'>
                    {this.state.isLoggingIn ?
                      <i className='fa fa-spin fa-spinner'></i>
                    : null}
                    &nbsp;Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return state.auth;
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      return dispatch(login(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
