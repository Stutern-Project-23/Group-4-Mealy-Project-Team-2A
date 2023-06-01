import React from 'react'
import apple from './SocialMediaIcons/apple.png'
import google from './SocialMediaIcons/google.png'
import facebook from './SocialMediaIcons/facebook.png'

const SocialMedia = () => {
  return (
    <div>
        <p>Or</p><p/>
        <p className='sign-in-using'>Sign In using</p>
        <div className='social-media-icons flex flex-row'>
          <a href="/"><img src={apple} alt="apple icon" className='mx-5 mt-6 mb-10'/></a>
          <a href="/"><img src={google} alt="google icon" className='mx-5 mt-6 mb-10'/></a>
          <a href="/"><img src={facebook} alt="facebook icon" className='mx-5 mt-6 mb-10'/></a>
        </div>
        <p>Don't have an account? <span className='text-orange-600 font-bold'>Sign Up</span></p>
        
        
    </div>
  )
}

export default SocialMedia;