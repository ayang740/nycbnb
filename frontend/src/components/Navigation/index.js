import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormModal';
import './Navigation.css';
import DemoUser from '../DemoUser';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className='host-home' to='/spots/add'>Host your Home</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <div className='nav-buttons'>
        <DemoUser />
        <LoginFormModal />
        <SignUpFormModal />
      </div>
    );
  }

  return (
    <ul className='nav'>
      <li className='nav-bar'>
        <NavLink className='home' exact to="/">NYCbnb</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;