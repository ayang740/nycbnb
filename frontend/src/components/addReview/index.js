import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createReview } from '../../store/review';
import { useShowModal } from '../addReviewModal';
import '../addReviewModal/AddReview.css'

const AddReview = () => {
    const {setShowModal} = useShowModal()
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const { spotId } = useParams()
    const spot = useSelector((state) => state.spot[spotId]);
    
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    
    let userId;
    if (sessionUser) userId = sessionUser.id;
    if (!sessionUser) return (
    <div className='login-popup'> Please login to leave a review</div>
    );

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
            setShowModal(false)
            history.push(`/spots/${spot.id}`);
        }
      };

    const handleCancelClick = () => {
        setRating('');
        setReview('');
        setShowModal(false)
      };

    return (
        <div className='review-form-wrapper'>
            <h2 className='add-review-h2'>Review</h2>
            <form className='add-review-form' onSubmit={handleSubmitReview}>
                <label className='add-review-label'> Tell us about your stay
                    <textarea 
                    className='add-reivew-input-textarea'
                    required
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    />
                </label>
                <label className='add-review-label'> Rate your stay
                    <input
                    className='add-review-input-select'
                    type="number"
                    min='1'
                    max='5'
                    required
                    value={rating}
                    onChange={(e) => setRating(e.target.value)} />
                </label>
                <div className='add-review-buttons'>
                    <button className='add-review-submit' type="submit">Submit</button>
                    <button className='add-review-cancel' type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
    )

}

export default AddReview