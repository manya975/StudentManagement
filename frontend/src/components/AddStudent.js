import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddStudent1.css';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    contactNumber: '',
    address: '',
    pincode: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    try {
      const response = await axios.post('http://localhost:8443/students', student, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Response:', response.data);
      navigate('/students'); 
    } catch (error) {
      console.error('Error adding student');
    }
  };

  return (
    <div id="container">
      <h2>Add Student</h2>
      <form id="formfill" autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input 
            type="text" 
            name="contactNumber" 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label>
          Address:
          <input 
            type="text" 
            name="address" 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label>
          Pincode:
          <input 
            type="text" 
            name="pincode" 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label>
          Password:
          <input 
            type="password" 
            name="password" 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <button type="submit" id="submit">Add Student</button>
        <button type="button" id="btn" onClick={() => navigate('/students')}>Cancel</button>
      </form>
    </div>
  );
};

export default AddStudent;
