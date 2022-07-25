import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSpots, removeSpot } from '../../store/spot';

import './oneSpot.css'

const OneSpot = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const { spotId } = useParams()
    const history = useHistory()

    const spot = useSelector((state) => state.spot[spotId]);

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    const deleteSpot = (e) => {
        e.preventDefault();
    
        dispatch(removeSpot(spotId))
    
        return history.push(`/`);
      };

    return (
        <div>
            <div>{spot?.address}</div>
            <div>{spot?.neighborhood}</div>
            <div>{spot?.borough}</div>
            <div>{spot?.title}</div>
            <div>{spot?.description}</div>
            <div>${spot?.price}/night</div>
            <div>{spot?.guests} guests</div>
            <div>{spot?.bedrooms} bedrooms</div>
            <div>{spot?.beds} beds</div>
            <div>{spot?.baths} baths</div>

            {sessionUser?.id === spot?.userId && 
                (
                    <div>
                        <button onClick={deleteSpot}>Delete Listing</button>
                    </div>
                )
            }
        </div>
    )

}

export default OneSpot