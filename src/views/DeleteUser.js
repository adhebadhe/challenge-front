import React, { useState, useContext } from 'react';
import { AuthContext } from '../store/Auth';
import axios from 'axios';

const DeleteUser = () => {
  const [email, setEmail] = useState('');
  const [auth, isAuth] = useContext(AuthContext);

  const api = async (data) => {
    try {
      // delete(url, {}, {})
      const res = await axios.delete(`http://localhost:4000/api/employee/${email}`, 
        {headers: {'Authorization': 'Basic asdf1234'}},
        {
        data: {
          Email: localStorage.getItem('Email'),
          Status: localStorage.getItem('Status'),
      }
    })

      //{auth: localStorage.getItem('Status'), Email: localStorage.getItem('Email')});
    } catch (err) {
      console.log('there was an error' + err);
    }
  }


  const onUserChange = e => { setEmail(e.target.value); }
  const onSubmit     = e => { api(); }


  return (
    <div>
      <h2>Delete Employee</h2>
      { auth ?
        <>
          <input type="text" onChange={onUserChange} value={email} placeholder="email@example.com" /> 
          <button className="myButton" type="submit" onClick={onSubmit} value="Upload">Delete</button>
        </>
        : 'inactive employee' 
      }
    </div>
  );
}

export default DeleteUser;