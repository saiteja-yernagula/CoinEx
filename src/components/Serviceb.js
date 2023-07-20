import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRobot, faCrown,faShieldHalved,faPaperPlane,faMagnifyingGlassChart,faHandshake} from '@fortawesome/free-solid-svg-icons'



const Serviceb = () => {
  return (
    <div className='pt-10 p-12 bg-gray-50'>
      <div className='font-bold text-2xl sm:text-6xl pt-7  py-5 text-center sm:px-[150px] '>Awesome services<br/> grow your business value</div>
      <div className='text-1xl sm:text-2xl py-7 text-center  pt-7  py-5 px-12 sm:px-[200px] pb-12 mb-12'>CoinEx is a simple software that allows you to run your business easily.<br/> One software tool brings the whole business together.</div>
        

        
       <div>
           <div  className='py-7 text-black text-center sm:grid grid-cols-3 gap-3 '>

             <div className='bg-white max-w-sm p-6 rounded  overflow-hidden sm:text-left sm:m-9 ; '>
                <div className='text-white my-12'><span className='bg-pink-600 p-6 rounded-[100%] text-[27px] '><FontAwesomeIcon icon={faRobot} /></span></div>
                <div className='font-bold text-2xl py-4 '>Automated Reports</div>
                <div className='sm:w-[70%] py-2'> Many desktop publishing packages and web page editors now use as their default model.</div>
            </div>

            <div className='max-w-sm  bg-white p-6 rounded  overflow-hidden sm:text-left sm:m-9 ;'>
                <div className='text-white my-12'><span className='bg-green-600 p-6 rounded-[100%] text-[27px]'><FontAwesomeIcon icon={faCrown} /></span></div>
                <div className='font-bold text-2xl py-4 ;'>User Journey Flow</div>
                <div className='sm:w-[70%] py-2'>Many desktop publishing packages and web page editors now use as their default model.</div>
            </div>

            <div className='max-w-sm p-6   bg-white rounded  overflow-hidden sm:text-left sm:m-9 ;'>
                <div className='text-white my-12'><span className='bg-yellow-600 p-6 rounded-[100%] text-[27px]'><FontAwesomeIcon icon={faShieldHalved} /></span></div>
                <div className='font-bold text-2xl py-4 ;'>Management & Security</div>
                <div className='sm:w-[70%] py-2'>Many desktop publishing packages and web page editors now use as their default model.</div>
            </div>

            <div className='max-w-sm p-6  bg-white  rounded  overflow-hidden sm:text-left sm:m-9 ; '>
                <div className='text-white my-12'><span className='bg-orange-600 p-6 rounded-[100%] text-[27px] '><FontAwesomeIcon icon={faPaperPlane} /></span></div>
                <div className='font-bold text-2xl py-4 '>Digital Marketing</div>
                <div className='sm:w-[70%] py-2'> Many desktop publishing packages and web page editors now use as their default model.</div>
            </div>

            <div className='max-w-sm p-6   bg-white rounded  overflow-hidden sm:text-left sm:m-9 ; '>
                <div className='text-white my-12'><span className='bg-violet-600 p-6 rounded-[100%] text-[27px] '><FontAwesomeIcon icon={faMagnifyingGlassChart} /></span></div>
                <div className='font-bold text-2xl py-4 '>Reporting & Analysis </div>
                <div className='sm:w-[70%] py-2'> Many desktop publishing packages and web page editors now use as their default model.</div>
            </div>

            <div className='max-w-sm p-6  bg-white  rounded  overflow-hidden sm:text-left sm:m-9 ; '>
                <div className='text-white my-12'><span className='bg-blue-600 p-6 rounded-[100%] text-[27px] '> <FontAwesomeIcon icon={faHandshake} /></span></div>
                <div className='font-bold text-2xl py-4 '>Wireframe Creation</div>
                <div className='sm:w-[70%] py-2'> Many desktop publishing packages and web page editors now use as their default model.</div>
            </div>
            
          </div>
        </div>

        <div>
        <div className='font-bold text-2xl sm:text-6xl pt-7  py-5 text-center sm:px-[150px] '>The most affordable pricing plan for you</div>
        <div className='text-1xl sm:text-2xl py-7 text-center  pt-7  py-5 px-12 sm:px-[200px] pb-12 mb-12'>CoinEx offers the most affordable planner you can use to improve your business. Such affordable prices are not available anywhere.</div>
         
        <div>
           <div  className='py-7 text-black  sm:grid grid-cols-3 gap-1 '>

             <div className='max-w-sm p-6 rounded  overflow-hidden sm:text-left sm:m-2 ; '>
               <ul className='p-6 bg-white font-semibold text-2xs rounded-lg'>
                <li className='font-bold py-3'>Starter Plan</li>
                <li className='py-3-'  ><span className='font-bold text-6xl '>$10</span>/Per Month</li>
                <li className='pt-10 py-2'>✔ Limited Access Library</li>
                <li className='py-2'>✔ Individual User Capabilities</li>
                <li className='py-2'>✔ No Updates Facility</li>
                <li className='py-2'>✔ Standard support</li>
                <li  className='border border-red-600  hover:border-blue-600 text-red-600 py-4 text-center p-6 my-5 hover:bg-blue-600 hover:text-white'>Choose plan</li>
               </ul>
            </div>


            <div className='max-w-sm p-6 rounded-lg  overflow-hidden sm:text-left sm:m-2 ; '>
               <ul className='p-6 bg-black text-white  font-semibold text-2xs rounded-lg'>
                <li className='font-bold py-3'>Basic Plan</li>
                <li className='py-3-'  ><span className='font-bold text-6xl '>$45</span>/Per Month</li>
                <li className='pt-10 py-2'>✔ Full Access Library</li>
                <li className='py-2'>✔ Limited User Capabilities</li>
                <li className='py-2'>✔ Free Lifetime Updates Facility</li>
                <li className='py-2'>✔ Premium support</li>
                <li  className='border border-red-600  hover:border-blue-600 text-red-600 py-4 text-center p-6 my-5 hover:bg-blue-600 hover:text-white'>Choose plan</li>
               </ul>
            </div>


            <div className='max-w-sm p-6 rounded-lg overflow-hidden sm:text-left sm:m-2 ; '>
               <ul className='p-6 bg-white  font-semibold text-2xs rounded-lg'>
                <li className='font-bold py-3'>Premium Plan </li>
                <li className='py-3-'  ><span className='font-bold text-6xl '>$100</span>/Per Month</li>
                <li className='pt-10 py-2'>✔ Full Access Library</li>
                <li className='py-2'>✔ Multiple User Capabilities</li>
                <li className='py-2'>✔ Free Lifetime Updates Facility</li>
                <li className='py-2'>✔ Dedicated Support</li>
                <li  className='border border-red-600  hover:border-blue-600 text-red-600 py-4 text-center p-6 my-5 hover:bg-blue-600 hover:text-white'>Choose plan</li>
               </ul>
            </div>


           
          </div>
        </div>

        </div>

    </div>
  )
}

export default Serviceb
