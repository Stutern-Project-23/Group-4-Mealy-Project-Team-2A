import React from 'react'
import apple from './SocialMediaIcons/apple.png'
import google from './SocialMediaIcons/google.png'
import facebook from './SocialMediaIcons/facebook.png'

const SocialMedia = () => {
  return (
    <div className='social-media-wrapper'>
        <p>Or</p><p/>
        <p className='sign-in-using'>Sign In using</p>
        <div className='social-media-icons'>
          <a href="/"><img src={apple} alt="apple icon"/></a>
          <a href="/"><img src={google} alt="google icon"/></a>
          <a href="/"><img src={facebook} alt="facebook icon"/></a>
        </div>
        <p className='account-creation-wrapper'>Don't have an account? <span className='account'>Sign Up</span></p>
    </div>
  )
}

export default SocialMedia;