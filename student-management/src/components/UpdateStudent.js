import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Add useParams
import '../components/UpdateStudent.css';

const UpdateStudent = ({ onClose }) => {
  const { id } = useParams(); // Get the id from the URL
  const [updatedStudent, setUpdatedStudent] = useState({
    name: '',
    contactNumber: '',
    address: '',
    pincode: '',
    password: ''
  });

  const navigate = useNavigate(); 

  // Fetch student data based on the id from the URL
  useEffect(() => {
    axios.get(`http://localhost:8443/students/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      setUpdatedStudent(response.data);
    })
    .catch(error => {
      console.error('Error fetching student details:', error);
    });
  }, [id]); 

  const handleChange = (e) => {
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id, updatedStudent);
    axios.put(`http://localhost:8443/students/${id}`, updatedStudent, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(() => {
      navigate('/students'); 
    })
    .catch(error => {
      console.error('Error updating student:', error);
    });
  };

  return (
    <div id="container">
      <h2>Update Student</h2>
      <form id="formfill" onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={updatedStudent.name} 
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
            value={updatedStudent.contactNumber} 
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
            value={updatedStudent.address} 
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
            value={updatedStudent.pincode} 
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
            autoComplete="new-password"
            value={updatedStudent.password} 
            onChange={handleChange} 
          />
        </label>
        <br />
        <button id="submit" type="submit">Update Student</button>
        <button id = "btn" type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
