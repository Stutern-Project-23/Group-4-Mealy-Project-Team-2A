import React from 'react'
import LeftSection from '../forgotPassword/LeftSection'
import RightSection from '../../components/RightSection'
import ResetPasswordImage from '../../assets/Reset-Psw-Image.png'
import Logo from '../../components/Logo'
// import "../styles/ReusableComponents.css";

const ResetPassword = () => {
  return (
    <div className="flex">
       <div className="w-1/2">
       <Logo />
       </div>
       <div className="w-1/2" >
       <img src={ResetPasswordImage} alt="" />
       </div>
    </div>
  )
}

export default ResetPassword