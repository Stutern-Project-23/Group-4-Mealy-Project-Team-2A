import React from 'react'
import Meal1 from '../../assets/meal1.png'
import Meal2 from '../../assets/meal1.png'
import Meal3 from '../../assets/meal3.png'
import HamBurger from '../../assets/hamburger.png'
import Button from '../Button'


const MealContainer = () => {
  return (
    <div className=" flex justify-between border bg-gray-400 w-11/12 h-40 mt-4 mb-12 ml-11">
  <div>
  <h2 className="text-4xl w-80">Register and get discount up to 50%</h2>
  <Button text="Create Account"/>
  </div>

  <div className="flex">
    <div>
    <h3>Want a Meal Plan?</h3>
    <h3>Track Meal Calorie</h3>
    <h3>Customized Meal</h3> 
    </div>

    <div className=" flex">
   <div className="w-16 my-0 gap-0">
   <img src={Meal1} alt="" className="mb-0"/>
    <img src={Meal2} alt="" />
    <img src={Meal3} alt="" />
   </div>
   <div  className="w-32"> <img src={HamBurger} alt="" /></div>
  </div>
  </div>

  
</div>
  )
}

export default MealContainer