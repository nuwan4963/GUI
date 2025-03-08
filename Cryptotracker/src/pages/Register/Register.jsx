import './Register.css';
import React, { useState } from 'react';

function Register() {
    const [values, setValues] = useState({
        username: '',
        email: '',  
        password: ''
    });

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/auth/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='register-first'>
            <img className='funbird2' src='funbird2.jpg' alt='funbird' />
            <div className='register-box'>
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className='input-box'>
                        <img className='icon' src="mail.png" alt="email icon" />
                        <input name='email' onChange={handleChange} type="text" required />
                        <label className='email1'>E-mail</label>
                    </div>
                    <div className='input-box'>
                        <img className='icon' src="user.png" alt="username icon" />
                        <input name='username' onChange={handleChange} type="text" required />
                        <label className='username'>Username</label>
                    </div>
                    <div className='input-box'>
                        <img className='icon' src="lock.png" alt="password icon" />
                        <input name='password' onChange={handleChange} type="password" required />
                        <label className='password'>Password</label>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                    </div>
                    <button type='submit' onClick={handleSubmit}>Register</button>
                    <div className='register-link'>
                        <p>Already have an account? <a href='/login'>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
