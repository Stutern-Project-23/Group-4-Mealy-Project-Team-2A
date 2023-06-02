import React from 'react'
import apple from './SocialMediaIcons/apple.svg'
import google from './SocialMediaIcons/google.svg'
import facebook from './SocialMediaIcons/facebook.svg'

const SocialMedia = () => {
  return (
    <div>
        <p>Or</p><p/>
        <p className='sign-in-using'>Sign In using</p>
        <div className='social-media-icons flex flex-row ml-4'>
          <a href="/"><img src={apple} alt="apple icon" className='mx-4 mt-6 mb-10 w-8'/></a>
          <a href="/"><img src={google} alt="google icon" className='mx-4 mt-6 mb-10 w-8'/></a>
          <a href="/"><img src={facebook} alt="facebook icon" className='mx-4 mt-6 mb-10 w-8'/></a>
        </div>
        <p>Don't have an account? <span className='text-orange-600 font-bold'>Sign Up</span></p>
        
        
    </div>
  )
}

export default SocialMedia;