import React from 'react'
import categoriespic1 from './images/image1.png'
import categoriespic2 from './images/image2.png'
import categoriespic3 from './images/image3.png'
import fav1 from './images/fav1.png'
import fav2 from './images/fav2.png'
import fav3 from './images/fav3.png'
import fav4 from './images/fav4.png'
import fav5 from './images/fav5.png'
import avocado from './images/avocado.png'
import tasteeImg from './images/tastee.png'
import NoRating from './images/norating.svg'
import FullRating from './images/fullrating.svg'
//import arrow from './images/cardarrow.svg'
import Input from '../../components/Input'
import Logo from '../../components/Logo'

import {Data} from './Homepagedata.js'

const Homepage = () => {
  return (
    <div  className='px-10'>
        <Logo />
        <div className='text-center'>
            <h4 className='font-bold mt-2'>Welcome, Amara</h4>
            <p>What would you like to eat?</p>
            <Input />
        </div>
    <p className='ml-2'>Categories</p>
    <div className='flex flex-row overflow-auto text-center'>
        <figure className='mx-1.5'>
            <img src={categoriespic1} alt='food'/>  
            <figcaption>Healthy</figcaption>  
        </figure>
        <figure className='mx-1.5'>
            <img src={categoriespic1} alt='food'/>  
            <figcaption>Healthy</figcaption>  
        </figure>
        <figure className='mx-1.5'>
            <img src={categoriespic2} alt='food'/>  
            <figcaption>African</figcaption>  
        </figure>
        <figure className='mx-1.5'>
            <img src={categoriespic2} alt='food'/>  
            <figcaption>African</figcaption>  
        </figure>
        <figure className='mx-1.5'>
            <img src={categoriespic3} alt='food'/>  
            <figcaption>Snacks</figcaption>  
        </figure>
        <figure className='mx-1.5'>
            <img src={categoriespic2} alt='food'/>  
            <figcaption>Snacks</figcaption>  
        </figure>
    </div>
    <div className='mt-9'>
        <p className='ml-2'>Favourite</p>
        <div className='flex flex-row'>
            <figure className='mx-1.5'>
                <img src={fav4} alt='fav'/>
            </figure>
            <figure className='mx-1.5'>
                <img src={fav3} alt='fav'/>
            </figure>
            <figure className='mx-1.5'>
                <img src={fav2} alt='fav'/>
            </figure>
            <figure className='mx-1.5'>
                <img src={fav1} alt='fav'/>
            </figure>
            <figure className='mx-1.5'>
                <img src={fav5} alt='fav'/>
            </figure>
            <figure className='mx-1.5'>
                <img src={fav4} alt='fav'/>
            </figure>
            <figure className='mx-1.5'>
                <img src={fav2} alt='fav'/>
            </figure>
            <figure className='mx-1.5'>
                <img src={fav3} alt='fav'/>
            </figure>
        </div>
    </div>
    <div className='w-1/3 bg-orange-600 flex self-center rounded-lg'>
        
        <img src={avocado} alt='' className='w-20 bg-orange-600'/>
        
        <div>
            <p className='bg-orange-600 text-white font-bold'>50% OFF</p>
            <p className='bg-orange-600 text-black'>All salad and pasta</p>
            <p className='text-orange-600 text-sm bg-white'>Use code Eattak50</p>
        </div>
    </div>
    <div>
        <p className='my-4'>All restaurants</p>
        <ul className='flex flex-row justify-between items-center bg-white px-4'>
            <li className='bg-white'>Order Again</li>
            <li className='bg-orange-600 px-8 py-2 my-2'><button className='text-white'>All</button></li>
            <li className='bg-white'>African</li>
            <li className='bg-white'>African</li>
            <li className='bg-white'>African</li>
            <li className='bg-white'>African</li>
            <li className='bg-white'>African</li>
            <li className='bg-white'>African</li>
        </ul>
    </div>
    <div>
        <ul className='grid grid-rows-5 grid-flow-col gap-4 mt-12 overflow-auto'>
            {Data.map((card) => (
                <li key={card.id} className='bg-white p-2'>
                    {/* <div className=' overflow-auto'> */}
                    <img src={tasteeImg} alt='food' className='bg-white p-0.2'/>
                    <h3 className='font-bold text-xl mt-2 bg-white'>{card.label}</h3>
                    <div className='flex flex-row gap-1 mt-3 bg-white'>
                        <img src={FullRating} alt='full ratings' className='w-5 bg-white'/>
                        <img src={FullRating} alt='full ratings' className='w-5 bg-white'/>
                        <img src={FullRating} alt='full ratings' className='w-5 bg-white'/>
                        <img src={FullRating} alt='full ratings' className='w-5 bg-white'/>
                        <img src={NoRating} alt='no ratings' className='w-5 bg-white'/>
                        <p className='text-xs bg-white'>Reviews (220)</p>
                    </div>
                    <div className='flex flex-row mt-4'>
                        <p className='text-sm pr-4 bg-white'>{card.description}</p>
                        {/* <a href='#' className='mt-3 w-10'><img src={arrow} alt='more info'/></a> */}
                    </div>
                    {/* </div> */}
                </li>
            
            ))}
        </ul>
    </div>
    </div>
  )
}

export default Homepage