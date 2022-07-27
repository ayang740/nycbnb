import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editSpot, getSpots } from "../../store/spot";
import '../AddSpot/addSpot.css'

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
        console.log(spotData)
        const updatedSpot = await dispatch(editSpot(spotData, spotId));
        history.push(`/spots/${spot.id}`);
        return updatedSpot
      };

      return (
        <div className='add-spot-wrapper'>
            <h1 className='add-spot-h1'>Edit Listing</h1>
            <form className='add-spot-form' onSubmit={handleEditSpot}>
                <label className='add-spot-label'> Address:
                    <input 
                        className='add-spot-input'
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
                <label className='add-spot-label'> Neighborhood:
                    <input 
                        className='add-spot-input'
                        type="text"
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        required
                    />
                </label>
                <label className='add-spot-label'> Borough:
                    <select className='add-spot-input-select' value={borough} onChange={(e) => setBorough(e.target.value)} required>
                        <option >Manhatten</option>
                        <option >Queens</option>
                        <option >Brooklyn</option>
                        <option >Bronx</option>
                        <option >Staten Island</option>
                    </select>
                </label>
                <label className='add-spot-label'> Title:
                    <input 
                        className='add-spot-input'
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label className='add-spot-label'> Price per night:
                    <input 
                        className='add-spot-input'
                        type="number"
                        value={price}
                        min='1'
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <label className='add-spot-label'> Guests:
                    <input 
                        className='add-spot-input'
                        type="number"
                        value={guests}
                        min='1'
                        onChange={(e) => setGuests(e.target.value)}
                        required
                    />
                </label>
                <label className='add-spot-label'> Bedrooms:
                    <input 
                        className='add-spot-input'
                        type="number"
                        value={bedrooms}
                        min='1'
                        onChange={(e) => setBedrooms(e.target.value)}
                        required
                    />
                </label>
                <label className='add-spot-label'> Beds:
                    <input 
                        className='add-spot-input'
                        type="number"
                        value={beds}
                        min='1'
                        onChange={(e) => setBeds(e.target.value)}
                        required
                    />
                </label>
                <label className='add-spot-label'> Baths:
                    <input 
                        className='add-spot-input'
                        type="number"
                        value={baths}
                        min='1'
                        onChange={(e) => setBaths(e.target.value)}
                        required
                    />
                </label>
                <label className='add-spot-label'> Upload Images:
                    <input 
                        className='add-spot-input'
                        type="text"
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                    />
                </label>
                <label className='add-spot-label'> Description:
                    <textarea
                        className='add-spot-input-textarea'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <div className='add-spot-buttons'>
                    <button className='add-spot-submit' type="submit">Edit Listing</button>
                    <button className='add-spot-cancel' type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
      )
    

}

export default EditSpot