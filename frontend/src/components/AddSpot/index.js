import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { createSpot } from '../../store/spot';
import './addSpot.css';

const AddSpot = () => {
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
    const [errors, setErrors] = useState([]);
    
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

        if (newSpot) {
            setErrors([]);
            history.push(`/`);
        }
      };
      

      const handleCancelClick = (e) => {
        e.preventDefault();
        setErrors([]);
        history.push('/');
    };

      return (
        <div className='add-spot-wrapper'>
            <h1 className='add-spot-h1'>Add Your Listing</h1>
            <form className='add-spot-form' onSubmit={handleSubmitSpot}>
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
                    <button className='add-spot-submit' type="submit">Add Listing</button>
                    <button className='add-spot-cancel' type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
      )

}

export default AddSpot