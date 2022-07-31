import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviews, removeReview } from "../../store/review";
import './Review.css'

const ReviewList = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams()
    const spot = useSelector(state => state.spot[spotId]);
    const reviews = useSelector(state => state.review);
    let spotReviews
    if (spot && reviews) {
        spotReviews = Object.values(reviews).filter(review => review.spotId === spot.id).reverse();
      }
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getReviews(spotId))
    }, [dispatch, spotId, reviews])



    if (!reviews || !spot) {
        return null;
    }

    return (
        <div className='reviews-wrapper'>
            <h2> Reviews </h2>
            <div className='reviews-block'>
                {spotReviews && spotReviews.map(review => {
                    return (
                        <div className='review-content' key={review.id}>

                            <div>{review.review}</div>

                            {sessionUser?.id === review?.userId &&
                            (
                                <button className='review-delete'
                                onClick={async()=> await dispatch(removeReview(review.id))}
                                >Delete Review</button>
                            )
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ReviewList;