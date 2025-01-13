import './Login.css'
import React from 'react'
import mail from '../../assets/mail.png'
import goat from '../../assets/goat.png'

function Login() {
return (
    <div className='login-first'>
        <div className='icon'><img src={goat}></img></div>
        <div className='login-box'>       
            <form>
                    <h2>Login</h2>
                    <div className='input-box'>
                            <img className='icon' src={mail}></img>
                            <input type="email" required></input>
                            <label className='email1'>E-mail</label>
                    </div>
                    <div className='input-box'>
                            <img className='icon' src="lock.png"></img>
                            <input type="password" required></input>
                            <label>Password</label>
                    </div>
                    <div className='remember-forgot'>
                            <label><input type='checkbox' />Remember me</label>
                            <a href='#'> Forgot Password?</a>
                    </div>
                    <button type='submit'><a href='http://localhost:5173/'>Login</a></button>
                    <div className='register-link'>
                            <p>Don't have an account? <a href='http://localhost:5173/register'>Register</a></p>
                    </div>
            </form>
        </div>
    </div>
)
}

export default Login
