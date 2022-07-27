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
    } 
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
    };

//edit spot
export const editSpot = (spotData, spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
      method: 'PUT',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(spotData)
    });
    if (response.ok) {
      const spot = await response.json();
      dispatch(updateSpot(spot));
      return spot;
    }
  };

//delete spot

export const removeSpot = spotId => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      dispatch(deleteSpot(spotId));

    }
  }

//reducer
const initialState = {};

const spotReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD:
            const newStateLoad = {}
            action.spots.forEach(spot => {
                newStateLoad[spot.id] = spot
            });
            return newStateLoad;
        case CREATE:
            const newStateCreate = {...state}
            newStateCreate[action.spot.id] = action.spot
            return newStateCreate;
        case UPDATE:
            const newStateUpdate = {...state}
            newStateUpdate[action.spot.id] = action.spot
            return newStateUpdate
        case DELETE:
            const newStateDelete = {...state}
            delete newStateDelete[action.spotId]
            return newStateDelete
        default:
            return state;
    }
}

export default spotReducer