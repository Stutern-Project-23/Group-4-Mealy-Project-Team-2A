import React from "react";



const Profile = () => {
  return(
    <>
    <h1 className="font-bold my-8">My profile</h1>
    <div className="border border-solid border-[#32324D] rounded-3xl shadow-md px-10 py-10 mb-5">
      <div> <img className="" src=""/></div> 
      <p className="font-bold">Amara Chukwu</p>
      <h3 className="">Lagos, Nigeria</h3>
    </div>

    <div className="border border-solid border-[#32324D] rounded-3xl shadow-md pl-10 mb-5">
      <h2 className="font-bold my-8">Personal information</h2>
      <div>
        <div>
          <h3>First Name</h3>
          <p className="mb-8 font-bold">Amara</p>

          <h3>Email address</h3>
          <p className="mb-8 font-bold">amarachukwu@gmail.com</p>
        </div>
        <div></div>
      </div>

    </div>

    <div></div>
    </>
   ) 
 
  
};

export default Profile;
