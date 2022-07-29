import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviews, removeReview } from "../../store/review";

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
    }, [dispatch, spotId])

    if (!reviews || !spot) {
        return null;
    }

    return (
        <div>
            <h2> Reviews </h2>
            {spotReviews && spotReviews.map(review => {
                return (
                    <div key={review.id}>
                        <div>{review.review}</div>
                        <div>{review.rating}</div>

                        {sessionUser?.id === review?.userId &&
                        (
                            <button
                            onClick={async()=> await dispatch(removeReview(review.id))}
                            >Delete Review</button>
                        )
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default ReviewList;