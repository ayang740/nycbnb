import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { createSpot } from '../../store/spot';
import './addSpot.css';

function AddSpot() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [address, setAddress] = useState('somewhere');
    const [neighborhood, setNeighborhood] = useState('somewhere');
    const [borough, setBorough] = useState('Manhatten');
    const [title, setTitle] = useState('new place');
    const [description, setDescription] = useState('nice place');
    const [price, setPrice] = useState(1);
    const [guests, setGuests] = useState(1);
    const [bedrooms, setBedrooms] = useState(1);
    const [beds, setBeds] = useState(1);
    const [baths, setBaths] = useState(1);
    const [images, setImages] = useState('')
    
    const sessionUser = useSelector(state => state.session.user);
    let userId;
    if (sessionUser) userId = sessionUser.id;
    if (!sessionUser) return <Redirect to="/login" />;

    const handleSubmitSpot = async (e) => {
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
          userId,
          images,

        };
        
        
        const newSpot = await dispatch(createSpot(spotData));
        history.push(`/`);
        return newSpot;
      };
      

      const handleCancelClick = (e) => {
        e.preventDefault();
        history.push('/');
    };

      return (
        <div>
            <h1>New Spot</h1>
            <form onSubmit={handleSubmitSpot}>
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
                <button type="submit">Add Listing</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
      )

}

export default AddSpot