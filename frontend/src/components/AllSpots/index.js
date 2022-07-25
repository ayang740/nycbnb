import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpots } from '../../store/spot';
import { Link } from 'react-router-dom';
import './spots.css'

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
        <div>
            {spots && spots.map(spot => {
                return (
                    <Link key={spot.id} to={`/spots/${spot.id}`}>
                        {spot.Images && spot.Images.length ? <img src={spot.Images[0].url} alt="first impression"/> : null}
                        <div>
                            <div>{spot.neighborhood}</div>
                            <div>{spot.borough}</div>
                        </div>
                        <div>{spot.price}</div>
                    </Link>
                )
            })}
        </div>
    )
        
}

export default SpotList;