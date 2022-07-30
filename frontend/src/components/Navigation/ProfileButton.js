import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormModal';
import './Navigation.css'

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const sessionUser = useSelector(state => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
    
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="dropdown-components">
        <div>
          {user?.username}
        </div>
        <NavLink className='host-home-link' to='/spots/add'>Host your Home</NavLink> 
        <button className='logout-button' onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    sessionLinks = (
      <div>
        <div>
          <LoginFormModal />
        </div>
        <div>
          <SignUpFormModal />
        </div>
      </div>
    );
  }
  
  return (
    <>
      <button className='profile-button' onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
            {sessionLinks}
        </ul>
      )}
    </>
  );
}

export default ProfileButton;