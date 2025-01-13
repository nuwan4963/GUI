import './Register.css'
import React from 'react'

function Register() {
    return (
        <div className='register-first'>
            <div className='register-box'>
                <form>
                    <h2>Register</h2>
                    <div className='input-box'>
                        <img className='icon' src="mail.png" alt="email icon" />
                        <input type="email" required />
                        <label className='email1'>E-mail</label>
                    </div>
                    <div className='input-box'>
                        <img className='icon' src="user.png" alt="username icon" />
                        <input type="text" required />
                        <label className='username'>Username</label>
                    </div>
                    <div className='input-box'>
                        <img className='icon' src="lock.png" alt="password icon" />
                        <input type="password" required />
                        <label className='password'>Password</label>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                        <a href='#'> Forgot Password?</a>
                    </div>
                    <button type='submit'>Register</button>
                    <div className='register-link'>
                        <p>Already have an account? <a href='/login'>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
