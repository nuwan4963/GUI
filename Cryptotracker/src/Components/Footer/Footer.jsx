
import './Footer.css'
import React from 'react'
import image from '../../assets/productimage.png'

function Footer() {
  return (
    <div className='footer'>
    <div className='row'>
        <div className='col'>
            <img className='image1'src={image}/>
            <p>Welcome to Crypto Tracker, your trusted partner in the dynamic world of cryptocurrency. Our mission is to provide accurate, real-time data and insightful analysis to help you navigate the ever-changing landscape of digital assets.</p>
        </div>
        <div className='col'>
          <h3>Office</h3>
          <p>NO-456,Hapugala Road</p>
          <p>Galle</p>
          <p>Sri Lanka</p>
          <p className='email-id'>mihiranagnuwan@gmail.com</p>
          <h4>+94-769451797</h4>
        </div>
        <div className='col'>
          <h3>Links</h3>
          <ul>
            <li ><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Contacts</a></li>
          </ul>

        </div>
        <div className='col'>
          <h3>Newsletter</h3>
          <form className='mail-form'>
            <img className='mail-image' src="mail.png"></img>
            <input type="email" placeholder='Enter your email id' required></input>
            <button className="form-button"type="submit">Submit</button>
          </form>
          
          
        </div>
        
      
    <p className='copyright'>Crypto Tracker @2025, All Rights Reserved</p>
      </div>
    
    </div>
    
  )
}

export default Footer
