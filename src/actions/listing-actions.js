import { client } from './';

const url = '/listings';

export function fetchListings(){
  return dispatch => {
    dispatch({
      type: 'FETCH_LISTINGS',
      payload: client.get(url)
    })
  }
}

export function newListing() {
  return dispatch => {
    dispatch({
      type: 'NEW_LISTING'
    })
  }
}

export function saveListing(listing) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_LISTING',
      payload: client.post(url, listing)
    })
  }
}

export function fetchListing(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_LISTING',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function updateListing(listing) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_LISTING',
      payload: client.put(`${url}/${listing._id}`, listing)
    })
  }
}

export function deleteListing(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_LISTING',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}
