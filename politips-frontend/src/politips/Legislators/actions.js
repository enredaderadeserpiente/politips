import request from 'superagent';

export const FETCH_LEGISLATORS_BEGIN = 'FETCH_LEGISLATORS_BEGIN';
export function fetchLegislatorsBegin() {
  return {
    "type": FETCH_LEGISLATORS_BEGIN
  }
}

export const FETCH_LEGISLATORS_SUCCESS = 'FETCH_LEGISLATORS_SUCCESS';
export function fetchLegislatorsSuccess(legislators) {
  return {
    "type": FETCH_LEGISLATORS_SUCCESS,
    "legislators": legislators,
  }
}

export function fetchLegislators() {
  return function(dispatch, getState) {
    dispatch(fetchLegislatorsBegin());
    return request.get(POLITIPS_API_URL + '/api/v1/legislators/')
    .then(function(response) {
      let legislators = response.body;
      dispatch(fetchLegislatorsSuccess(legislators));
    })
  }
}

export const ADD_LEGISLATOR_BEGIN = 'ADD_LEGISLATOR_BEGIN';
export function addLegislatorBegin() {
  return {
    "type": ADD_LEGISLATOR_BEGIN
  }
}

export const ADD_LEGISLATOR_SUCCESS = 'ADD_LEGISLATOR_SUCCESS';
export function addLegislatorSuccess(legislator) {
  return {
    "type": ADD_LEGISLATOR_SUCCESS,
    "legislator": legislator
  }
}

export function addLegislator(legislatorData) {
  return function(dispatch, getState) {
    dispatch(addLegislatorBegin());
    return request.post(POLITIPS_API_URL + '/api/v1/legislators/', legislatorData)
    .then(function(response) {
      let legislator = response.body;
      dispatch(fetchLegislators());
      dispatch(addLegislatorSuccess(legislator));
      return legislator;
    })
  }
}