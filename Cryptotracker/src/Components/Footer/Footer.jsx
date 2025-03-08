
import './Footer.css'
import React from 'react'
import image from '../../assets/productimage.png'
import mail from '../../assets/mail.png'
import facebook from '../../assets/facebook.png'
import linkdin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import telegram from '../../assets/telegram.png'
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
          <p>NO-456,Hapugala Road,</p>
          <p>Galle,</p>
          <p>Sri Lanka</p>
          <p className='email-id'>mihiranagnuwan@gmail.com</p>
          <h4>+94-769451797</h4>
        </div>
        <div className='col'>
          <h3>Links</h3>
          <ul>
            <li><a href="http://localhost:5173/">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="http://localhost:5173/about">About Us</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Contacts</a></li>
          </ul>

        </div>
        <div className='col'>
          <h3>Newsletter</h3>
          <form className='mail-form'>
            <img className='mail-image' src={mail}></img>
            <input type="email" placeholder='Enter your email id' required></input>
            <button className="form-button"type="submit">Submit</button>
          </form>
          <br/>
          <h3>Stay in Touch</h3>
          <div>
          <a href='https://www.bing.com/search?filters=ufn%3a%22Gmail%22+sid%3a%22c2fb3ac4-dd75-2fbf-e526-76f8a2edfe55%22&pglt=2083&q=gmail&cvid=c713f9f2908c416aa8eba5c354d0fe09&gs_lcrp=EgRlZGdlKgcIABAuGPkHMgcIABAuGPkHMgYIARBFGDkyBggCEAAYQDIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQABhAMgYIBxAAGEAyBggIEAAYQDIICAkQ6QcY_FXSAQgxNjQ1ajBqMagCALACAA&FORM=ANNAB1&PC=U531'><img className='social' src={mail}></img></a>
          <a href="https://www.bing.com/search?filters=ufn%3a%22Facebook%22+sid%3a%224bc8f781-7083-d1a0-f781-9466e0eb62e7%22&pglt=2083&q=facebook&cvid=54954317f3a34c7a8f028cb84bf832b8&gs_lcrp=EgRlZGdlKgcIABAuGPkHMgcIABAuGPkHMgYIARBFGDkyBggCEAAYQDIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxAAGEAyBggIEAAYQDIICAkQ6QcY_FXSAQgxNTQ4ajBqMagCALACAA&FORM=ANNAB1&PC=U531"><img className='social' src={facebook}></img></a>
          <a href='https://www.bing.com/search?filters=ufn%3a%22LinkedIn%22+sid%3a%22401e29b7-e564-7d0a-69dd-4aeff23c198d%22&pglt=2083&q=linkedin&cvid=54b842873f2e46909bb37c24da55c6b7&gs_lcrp=EgRlZGdlKgYIARAuGEAyBggAEEUYOTIGCAEQLhhAMgYIAhAAGEAyBggDEC4YQDIGCAQQLhhAMgYIBRAuGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEAyCAgJEOkHGPxV0gEIMjU0NmowajGoAgCwAgA&FORM=ANNAB1&PC=U531'><img className='social' src={linkdin}></img></a>
          <a href='https://www.bing.com/search?filters=ufn%3a%22Twitter%22+sid%3a%22c47da78b-4fdf-3297-761e-74439706bca1%22&pglt=2083&q=twitter&cvid=6e20b82728264aee9d5b51962275eecc&gs_lcrp=EgRlZGdlKgcIABAuGPkHMgcIABAuGPkHMgYIARBFGDkyBggCEC4YQDIGCAMQABhAMgYIBBAuGEAyBggFEAAYQDIGCAYQABhAMgYIBxAuGEAyBggIEC4YQDIICAkQ6QcY_FXSAQgyNDkyajBqMagCALACAA&FORM=ANNAB1&PC=U531'><img className='social' src={twitter}></img></a>
          <a href='https://www.bing.com/search?filters=ufn%3a%22Telegram+(software)%22+sid%3a%22d6f23f86-5739-a688-4e15-c519cc203ca8%22&pglt=2083&q=telegram&cvid=5c0a4851284f4c589e0c211b10e3cc2a&gs_lcrp=EgRlZGdlKgYIAhAuGEAyBggAEEUYOTIGCAEQABhAMgYIAhAuGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBBFGDwyCAgJEOkHGPxV0gEIMjI2OGowajGoAgCwAgA&FORM=ANNAB1&PC=U531'><img className='social' src={telegram}></img></a>
          </div>
          
        </div>
        
    <hr/>  
    <p className='copyright'>Crypto Tracker @2025, All Rights Reserved</p>
      </div>
    
    </div>
    
  )
}

export default Footer
