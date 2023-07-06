import React from "react";



const Profile = () => {
  return(
    <>
    <h1 className="font-bold my-8">My profile</h1>
    <div className="flex space-x-20 border border-solid border-grey-600 rounded-3xl shadow-md px-10 py-10 mb-5">
      <div> <img className="h-20 rounded" src="https://i.pinimg.com/236x/f3/5f/20/f35f20c6ccc8f8b1b6bcc57801894246.jpg"/></div> 
     <div>
      <p className="font-bold">Amara Chukwu</p>
      <h3 className="">Lagos, Nigeria</h3>
      </div> 
    </div>

    <div className="border border-solid border-grey-600 rounded-3xl shadow-md pl-10 mb-5">
      <h2 className="font-bold my-8">Personal information</h2>
      <div className="flex space-x-20">
        <div>
          <h3>First Name</h3>
          <p className="mb-8 font-bold">Amara</p>

          <h3>Email address</h3>
          <p className="mb-8 font-bold">amarachukwu@gmail.com</p>
        </div>

        <div>
          <h3>Last Name</h3>
          <p className="mb-8 font-bold">Chukwu</p>

          <h3>Phone</h3>
          <p className="mb-8 font-bold">+234 543 678 0086</p>
        </div>
      </div>

    </div>

 <div className="border border-solid border-grey-600 rounded-3xl shadow-md pl-10 mb-5">
 <h2 className="font-bold my-8">Addresses</h2>
      <div className="flex space-x-20">
        <div>
          <h3>Country</h3>
          <p className="mb-8 font-bold">Nigeria</p>

          <h3>Street/Number</h3>
          <p className="mb-8 font-bold">St. Finbarrs Road, House 73</p>
        </div>

        <div>
          <h3>City/State</h3>
          <p className="mb-8 font-bold">Akoka, Lagos</p>

          <h3>Postal Code</h3>
          <p className="mb-8 font-bold">100213</p>
        </div>
      </div>
    </div>
    </>
   ) 
 
  
};

export default Profile;
