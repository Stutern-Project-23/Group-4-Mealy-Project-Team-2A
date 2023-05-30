import React from "react";
import Logo from "../../components/Logo";
import MainHeading from  "../../components/MainHeading";
import MainCaption from "../../components/MainCaption";
import Input from "../../components/Input";
import Button from "../../components/Button";


const LeftSection = ()=>{
    return(
        <>
        <div className="leftSection">
        <Logo />
        <div>
        <MainHeading heading="Reset Password"/>
        <MainCaption caption="Enter the email associated with your account and we will send you a code to reset it."/>
        <Input text="Email Address"/>
        <Button text="Get code"/>
        </div>
        </div>
        </>
    );
};

export default LeftSection;