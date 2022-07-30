import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpots } from '../../store/spot';
import { Link } from 'react-router-dom';
import './spots.css'
import RatingStars from '../RatingStars';

const SpotList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpots());
      }, [dispatch]);
    
      const spots = useSelector((state) => {
        return Object.values(state.spot)
      });

    if (!spots) {
        return null
    }

    return (
        <div className="spots-list-wrapper">
            {spots && spots.map(spot => {
                return (
                    <Link className="spot-list-link" key={spot.id} to={`/spots/${spot.id}`}>
                        <div className="spot-list-card">
                            <div className="spot-list-image-div">
                                {spot.Images && spot.Images.length ? <img className="spot-list-image" src={spot.Images[0].url} alt="first impression"/> : null}
                            </div>
                            <div className='spot-list-info-div'>
                                <div className="spot-list-text-div">
                                    <div className="spot-list-location">{spot.neighborhood}, {spot.borough}</div>
                                    <div className="spot-list-price">${spot.price}/night</div>
                                </div>
                                <div>
                                    <RatingStars id={spot.id}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
        
}

export default SpotList;