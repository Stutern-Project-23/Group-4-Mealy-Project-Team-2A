import React from 'react'
import Layout from '../../components/LayoutAlt'
import Rectangle from '../../../assets/Rectangle 8594.png'

const Delete = () => {
  return (
    <Layout>
        <div>
        <div className="border-2 border-solid border-grey-600 rounded-3xl text-center px-10 py-10 mb-5">
              <h2 className="font-bold">Delete Account and Data</h2>
              <p>
              In accordance with our privacy policy, deleting your account and data can’t be<br/> undone, 
              so we need to check it’s you before going ahead.
              </p>
              <p className="mt-4">
              Send us a request and we will confirm via email after we have reviewed it
              </p>
            </div>

            <div className="border-2 border-solid border-grey-600 rounded-3xl text-center px-10 py-10 mb-5">
              <div className="flex justify-center">
                <img src={Rectangle} alt="rectangle" className="w-96"/>
              </div>
              <button className="bg-[#fa5a00] text-white w-48 py-3 mt-4 rounded-lg">Send Request</button>
            </div>
        </div>
    </Layout>
    
  )
}

export default Delete