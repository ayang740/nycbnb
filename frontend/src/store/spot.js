import { csrfFetch } from "./csrf";

//types

const LOAD = 'spot/loadSpots';
const CREATE = 'spot/createSpot';
const UPDATE = 'spot/updateSpot'
const DELETE = 'spot/deleteSpot';

//actions
const loadSpot = spots => ({
    type: LOAD,
    spots
  });

const addSpot = spot => ({
  type: CREATE,
  spot
});

const updateSpot = spot => ({
  type: UPDATE,
  spot
})

const deleteSpot = spotId => ({
  type: DELETE,
  spotId
})

//thunks

//get all spots
export const getSpots = () => async dispatch => {
    const response = await csrfFetch(`/api/spots`);
    if (response.ok) {
      const spots = await response.json();
      dispatch(loadSpot(spots));
      return response;
    } else return response.json()
  };

//add spot
export const createSpot = (spotData) => async dispatch => {
const response = await csrfFetch(`/api/spots`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(spotData)
});
if (response.ok) {
    const spot = await response.json()
    dispatch(addSpot(spot))
    return spot;
    }
}

//delete spot

export const removeSpot = spotId => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      const spotId = await response.json();
      dispatch(deleteSpot(spotId));
      return spotId;
    }
  }

//reducer
const initialState = {};

const spotReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch(action.type) {
        case LOAD:
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            });
            return newState;
        case CREATE:
            newState[action.spot.id] = action.spot
            return newState;
        case DELETE:
            delete newState[action.spot.id]
            return newState
        default:
            return state;
    }
}

export default spotReducer