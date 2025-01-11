import React from 'react'
import './SocialFooter.css'


function SocialFooter() {
  return (
    <div className='social-footer'>
        <div className='social-up'>
            <h2>Stay in Touch</h2>
            <div className='div-images'>
                <img className='images'src="facebook.png"/>
                <img className='images'src="mail.png"/>
                <img className='images'src="twitter.png"/>
                <img className='images'src="instagram.png"/>
                <img className='images'src="telegram.png"/>
                <img className='images'src="youtube.png"/> 
            </div>
            <br/>
            <br/>
            <br/>
            <h2>Explore Our Product</h2>
            <div className='div-media'>
                <img className='media'src="darkAppStore.svg"/>
                <img className='media'src="darkGooglePlay.svg"/>
                <img className='media'src="darkMacAppStore.svg"/>
            </div>
        </div>
    </div>
  )
}

export default SocialFooter
