import request from 'superagent';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export function loginBegin() {
  return {
    "type": LOGIN_BEGIN
  }
}

export const LOGIN_ERROR = 'LOGIN_ERROR';
export function loginError(loginErrorData) {
  return {
    "type": LOGIN_ERROR,
    "loginErrorData": loginErrorData
  }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess(token, user) {
  return {
    "type": LOGIN_SUCCESS,
    "token": token,
    "user": user
  }
}

export function login(username, password) {
  return function(dispatch, getState) {
    dispatch(loginBegin());

    return request.post(POLITIPS_API_URL + '/api-token-auth/', {
      "username": username,
      "password": password
    }).then(function(response) {
      dispatch(loginSuccess(response.body.token, response.body.user));
    }).catch(function(e) {
      dispatch(loginError(e.body));
      return e.body;
    })
  }
}

export const LOGOUT = 'LOGOUT';
export function logout(token, user) {
  return {
    "type": LOGOUT
  }
}

