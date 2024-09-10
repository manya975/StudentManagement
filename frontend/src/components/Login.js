import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Login.css';

const LoginForm = () => {
    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(contactNumber,password)

            const con = JSON.stringify({contactNumber:contactNumber, password:password})
            console.log(con)
            // const response = await axios.post('http://localhost:8443/students/login', {
            //     data:con
            // });
            axios({
                method: 'post',
                url: 'http://localhost:8443/students/login', 
                data: {
                  contactNumber:contactNumber, password:password
                }
                  
              }).then((response) => {
                     console.log(response);
                     const token = response.data.jwt; 
                        if (token) {
                            localStorage.setItem('token', token);

                            console.log('Token received and stored:', token);
                            navigate('/students');
                        } else {
                            setError('Token not found');
                        }
                  });
        } catch (error) {
            setError('Invalid contact number or password');
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginForm;
