import { FETCH_LEGISLATORS_BEGIN, FETCH_LEGISLATORS_SUCCESS } from '../actions';

export default function legislators(state={'legislators': null}, action) {
  switch (action.type) {
    case FETCH_LEGISLATORS_BEGIN:
      return Object.assign({}, state, {
      });
    break;
    case FETCH_LEGISLATORS_SUCCESS:
      return Object.assign({}, state, {
          'legislators': action.legislators
      });
    break;
  }
  return state;
}
