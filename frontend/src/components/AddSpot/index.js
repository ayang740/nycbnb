import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { createSpot } from '../../store/spot';
import './addSpot.css';

const AddSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [address, setAddress] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [borough, setBorough] = useState('Manhattan');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [guests, setGuests] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [beds, setBeds] = useState(0);
    const [baths, setBaths] = useState(0);
    const [images, setImages] = useState('')
    const [errors, setErrors] = useState([]);
    
    const sessionUser = useSelector(state => state.session.user);
    let userId;
    if (sessionUser) userId = sessionUser.id;
    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmitSpot = async (e) => {
        e.preventDefault();
        setErrors([]);
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
        const newSpot = await dispatch(createSpot(spotData))
            .catch(async (res) => {
                const data = await res.json();
                if (data) {
                    setErrors(data);
                }
            })

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
                <ul className='add-spot-errors'>
                    {!!errors.errors && errors.errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
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
                        <option >Manhattan</option>
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