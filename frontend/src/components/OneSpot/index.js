import { useParams, useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSpots, removeSpot } from '../../store/spot';
import ReviewList from '../AllReviews';
import AddReviewModal from '../addReviewModal';
import RatingStars from '../RatingStars';
import './oneSpot.css'

const OneSpot = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const { spotId } = useParams()
    const spot = useSelector((state) => state.spot[spotId]);
    const history = useHistory()

    const spotImages = spot?.Images

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    const deleteSpot = (e) => {
        e.preventDefault();
    
        dispatch(removeSpot(spotId))
    
        return history.push(`/`);
      };
    if(!spot) {
        return null
    }
    
    return (
        <div className='spot-wrapper'>
            <div className='spot-grid'>
                <div className='spot-title'>{spot?.title}</div>
                <div className='spot-top-div'>
                    <div>
                        <RatingStars id={spot.id}/>
                    </div>
                    <div className='spot-location'>{spot?.address}, {spot?.neighborhood}, {spot?.borough}</div>
                </div>
                <div className='spot-images'>
                    {spotImages && spotImages.map(image => {
                        return (
                            <img className='spot-image' src={image.url} alt="array"/>
                        )
                    })}
                </div>
                
                <div className='spot-accommodations'>
                    <div>{spot?.guests} guests · {spot?.bedrooms} bedrooms · {spot?.beds} beds · {spot?.baths} baths</div>
                </div>
                <div className='spot-middle-div'>
                    <div className='spot-description'>{spot?.description}</div>
                    <div className='spot-reservation'>
                        <div>${spot?.price}/night</div>
                        <div>
                            <RatingStars id={spot.id}/>
                        </div>
                    </div>
                </div>

                {sessionUser?.id === spot?.userId && 
                    (
                        <div>
                            <Link to={`/spots/${spot.id}/edit`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={deleteSpot}>Delete Listing</button>
                        </div>
                    )
                }
            </div>
            <div>
                <ReviewList />
            </div>
            <div>
                <AddReviewModal />
            </div>
        </div>
    )

}

export default OneSpot