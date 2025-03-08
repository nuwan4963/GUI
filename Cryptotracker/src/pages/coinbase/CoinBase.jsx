
import './CoinBase.css'
import React from 'react'

function CoinBase() {
  return (
    <div className='binance-connect-first'>
       <div className='binance-connect-main'>
        
        <section className='binance-connect-box1'>
            <img className='binance-logo'src='coinbase.png'></img>
            <div>
                <h2>CoinBase</h2>
                <p>Don't have an account? <a href="https://login.coinbase.com/signup?action=signup&client_id=258660e1-9cfe-4202-9eda-d3beedb3e118&locale=en&oauth_challenge=68377e97-e8b8-465f-bf4b-0b8e9a2fb06e">Create</a></p>
            </div>

        </section>
        <section>
         <section className='binance-connect-box2'>
            <section className='binance-connect-box2-1'>
                <h2 className='connect-box-title'>API Sync</h2>
                <p>API Key</p>
                <input placeholder='Enter API Key'type='text'></input>
                <p>API Secret</p>
                <input placeholder='Enter API Secret' type='text'></input>
                <button className='connect-button'>Connect</button>
                
                <section className='secure-connection'>
                    
                  <img src='check.png'></img>
                  <div className='secure-div'>
                    <h2 className='secure-title'>Secure Connection</h2>
                    <p>All data is exchanged over a secure, encrypted connection to protect your information.</p>
                  </div>

                </section>


                <section className='secure-connection'>
                    
                    <img src='eye.png'></img>
                  <div>
                    <h2>Read-Only Access</h2>
                  
                    <p>This integration has read-only access and cannot make changes to your account or move funds.</p>
                  </div>
                </section>
                <section className='secure-connection'>
                    
                    <img src='privacy.png'></img>
                  <div>
                    <h2>User-Controlled Permissions</h2>
                  
                    <p>You are in control. You can review and revoke access at any time from your account settings.</p>
                  </div>
                </section> 


            </section>
            <section className='binance-connect-box2-2'>
                <h2>Step-by-Step Instructions</h2>
                <p>1. Login to your Binance account on your computer</p>
                <p>2. Select Account from the left side menu - API Management</p>
                <p>3. Click the Create API button and choose System generated API key type</p>
                <p>4. In the Label API Key field type what you want to call it, ex. CoinStats Binance, then click Next</p>
                <p>5. Input your Google Authentication Code (2FA) for Binance and Email Verification Code</p>
                <p>6. You can either scan the QR code with the CoinStats app by tapping Scan QR Code below and pointing the camera at the QR code on the screen or manually copy/paste your API and Secret Key into the app</p>
            </section>
          </section>
        </section>
        </div>
    </div>
  )
}

export default CoinBase
