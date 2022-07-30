import React, { useState } from 'react';
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './DemoUser.css'

function DemoUser() {

  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [credential, _setCredential] = useState('Demo-lition');
  const [password, _setPassword] = useState('password');

  const handleDemoLogin = () => {
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
      <button className='demouser-button' onClick={handleDemoLogin}>Demo User</button>
      <ul className="login-form-errors">
      {errors.length ? errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      )) : null}
      </ul>
    </>
  );
}

export default DemoUser;