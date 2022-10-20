import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import RecipeCard from "../recipes/RecipeCard"
import Search from "./Search"

export default function SearchedSpotList() {
    const { search } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpots());
      }, [dispatch]);
    
      const spots = useSelector((state) => {
        return Object.values(state.spot)
      });

      const searchedSpots = spots.filter(spot => spot.name.toLowerCase().includes(search))
      
    if (!spots) {
        return null
    }
        
    return(
        <div className="spot-list-wrapper">
            <div className="spot-container">
                <Search />
            </div>
            <div className="spot-list-container">
                {searchedSpots.length > 0 && searchedSpots.map(spot => (
                    <div>hello</div>
                ))}
                {searchedSpots.length < 1 &&
                (
                <div className="no-spots-search">No spots found, please try another search...</div>
                )
                }
            </div>
        </div>
    )
}