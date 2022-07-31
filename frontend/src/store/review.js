import { csrfFetch } from "./csrf";

//types

const LOAD = 'review/loadReviews';
const CREATE = 'review/createReview';

const DELETE = 'review/deleteReview';

//actions
const loadReview = reviews => ({
    type: LOAD,
    reviews
  });

const addReview = review => ({
  type: CREATE,
  review
});

const deleteReview = reviewId => ({
  type: DELETE,
  reviewId
});

//thunks

//get all reviews
export const getReviews = () => async dispatch => {
    const response = await csrfFetch(`/api/reviews`);
    if (response.ok) {
      const reviews = await response.json();
      dispatch(loadReview(reviews));
      return response;
    } 
  };

//add review
export const createReview = (reviewData) => async dispatch => {
    const response = await csrfFetch(`/api/reviews`, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(reviewData)
    });
    if (response.ok) {
        const review = await response.json()
        dispatch(addReview(review))
        return review;
        }
    };


//delete review

export const removeReview = reviewId => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      dispatch(deleteReview(reviewId));
      return response
    }
  }
  //reducer
  const initialState = {}
  
  const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD:
            const newStateLoad = {}
            action.reviews.forEach(review => {
                newStateLoad[review.id] = review
            });
            return newStateLoad;
        case CREATE:
            const newStateCreate = {...state}
            newStateCreate[action.review.id] = action.review
            return newStateCreate;

        case DELETE:
            const newStateDelete = {...state}
            delete newStateDelete[action.reviewId]
            return newStateDelete
        default:
            return state;
    }
}

export default reviewReducer

