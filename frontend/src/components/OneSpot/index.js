import { useParams, useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSpots, removeSpot } from '../../store/spot';
import ReviewList from '../AllReviews';
import AddReviewModal from '../addReviewModal';

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
                <div>{spot?.title}</div>
                <div>{spot?.address}, {spot?.neighborhood}, {spot?.borough}</div>
                <div className='spot-images'>
                    {spotImages && spotImages.map(image => {
                        return (
                            <img className='spot-image' src={image.url} alt="array"/>
                        )
                    })}
                </div>
                
                <div>${spot?.price}/night</div>
                <div className='spot-accommodations'>
                    <div>{spot?.guests} guests </div>
                    <div>{spot?.bedrooms} bedrooms</div>
                    <div>{spot?.beds} beds</div>
                    <div>{spot?.baths} baths</div>
                </div>
                <div>{spot?.description}</div>

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