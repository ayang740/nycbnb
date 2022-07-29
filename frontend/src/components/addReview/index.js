import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { createReview } from '../../store/review';
import LoginFormModal from '../LoginFormModal';

const AddReview = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const { spotId } = useParams()
    const spot = useSelector((state) => state.spot[spotId]);
    
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    
    let userId;
    if (sessionUser) userId = sessionUser.id;
    if (!sessionUser) return <LoginFormModal />;

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        const reviewData = {
          review,
          rating,
          userId,
          spotId,
        };

        const newReview = await dispatch(createReview(reviewData));

        if (newReview) {
            history.push(`/spots/${spot.id}`);
        }
      };

    const handleCancelClick = () => {
        setRating('');
        setReview('');
      };

    return (
        <div>
            <h2>Review</h2>
            <form onSubmit={handleSubmitReview}>
                <label> Tell us about your stay
                    <textarea 
                    required
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    />
                </label>
                <label> Rate your stay
                    <input
                    type="number"
                    min='1'
                    max='5'
                    required
                    value={rating}
                    onChange={(e) => setRating(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
    )

}

export default AddReview