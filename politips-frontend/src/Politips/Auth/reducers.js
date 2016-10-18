import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, REQUEST_GEOLOCATION_SUCCESS } from './actions';

export default function auth(state={'user': null}, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return Object.assign({}, state, {
      });
    break;
    case LOGIN_ERROR:
      return Object.assign({}, state, {
      });
    break;
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        "user": action.user,
        "token": action.token
      });
    break;
    case LOGOUT:
      return Object.assign({}, state, {
        "user": null,
        "token": null
      });
    break;
    case REQUEST_GEOLOCATION_SUCCESS:
      return Object.assign({}, state, {
        "geolocation": action.geolocation,
      });
    break;
  }
  return state;
}
