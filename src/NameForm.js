// src/NameForm.js
import React, { useState } from 'react';
import './NameForm.css';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName === '' || lastName === '') {
      setError('Both fields are required');
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError('');
    }
  };

  return (
    <div className="name-form">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input 
            type="text" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input 
            type="text" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default NameForm;
