import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editSpot, getSpots } from "../../store/spot";
import './editSpot.css'

const EditSpot = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector((state) => state.spot[spotId]);

    const history = useHistory();

    const [address, setAddress] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [borough, setBorough] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(1);
    const [guests, setGuests] = useState(1);
    const [bedrooms, setBedrooms] = useState(1);
    const [beds, setBeds] = useState(1);
    const [baths, setBaths] = useState(1);
    const [images, setImages] = useState('');

    const addValues = () => {
        setAddress(spot.address)
        setNeighborhood(spot.neighborhood)
        setBorough(spot.borough)
        setTitle(spot.title)
        setDescription(spot.description)
        setPrice(spot.price)
        setGuests(spot.guests)
        setBedrooms(spot.bedrooms)
        setBeds(spot.beds)
        setBaths(spot.baths)
        setImages(spot.images)
    }
    
    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    useEffect(() => {
        if(spot) {
            addValues()
        }
    },[spot])

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push('/');
    };

    const handleEditSpot = async (e) => {
        e.preventDefault();
    
        const spotData = {
          address,
          neighborhood,
          borough,
          title,
          description,
          price,
          guests,
          bedrooms,
          beds,
          baths,
          images,

        };
        
        const updatedSpot = await dispatch(editSpot(spotData, spotId));
        history.push(`/spots/${spot.id}`);
        return updatedSpot
      };

      return (
        <div>
            <h1>Edit Spot</h1>
            <form onSubmit={handleEditSpot}>
                <label> Address:
                    <input 
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
                <label> Neighborhood:
                    <input 
                        type="text"
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        required
                    />
                </label>
                <label> Borough:
                    <select value={borough} onChange={(e) => setBorough(e.target.value)} required>
                        <option >Manhatten</option>
                        <option >Queens</option>
                        <option >Brooklyn</option>
                        <option >Bronx</option>
                        <option >Staten Island</option>
                    </select>
                </label>
                <label> Title:
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label> Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label> Price per night:
                    <input 
                        type="number"
                        value={price}
                        min='1'
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <label> Guests:
                    <input 
                        type="number"
                        value={guests}
                        min='1'
                        onChange={(e) => setGuests(e.target.value)}
                        required
                    />
                </label>
                <label> Bedrooms:
                    <input 
                        type="number"
                        value={bedrooms}
                        min='1'
                        onChange={(e) => setBedrooms(e.target.value)}
                        required
                    />
                </label>
                <label> Beds:
                    <input 
                        type="number"
                        value={beds}
                        min='1'
                        onChange={(e) => setBeds(e.target.value)}
                        required
                    />
                </label>
                <label> Baths:
                    <input 
                        type="number"
                        value={baths}
                        min='1'
                        onChange={(e) => setBaths(e.target.value)}
                        required
                    />
                </label>
                <label> Upload Images:
                    <input 
                        type="text"
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                    />
                </label>
                <button type="submit">Edit Listing</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
      )
    

}

export default EditSpot