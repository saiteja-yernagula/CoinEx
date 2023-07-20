import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons'




const Contactb = () => {
  return (
    <div className='p-12'>
        <div className='py-7 text-black text-center sm:grid grid-cols-3 gap-3 '>
            <div className='max-w-sm my-3 p-6 rounded place-content-center  shadow-lg overflow-hidden  sm:m-9 hover:scale-[1.03] '>
                <div className='text-white my-12 '><span className='bg-pink-600 p-6 rounded-[100%] text-[27px] '><FontAwesomeIcon icon={faPhone} /></span></div>
                <div className=' py-2 '>+088-436-258-001</div>
                <div className=' py-2 '>+991-656-654-988</div>

            </div>

            <div className='max-w-sm my-3 p-6 text-center place-content-center rounded shadow-lg overflow-hidden sm:m-9 hover:scale-[1.03]'>
             <div className='text-white my-12'><span className='bg-green-600 p-6 rounded-[100%] text-[27px]'><FontAwesomeIcon icon={faEnvelope} /></span></div>
                <div className=' py-2'>info@example.com</div>
                <div className=' py-2'>job@example.com</div>
            </div>

            <div className='max-w-sm my-3 p-6 rounded shadow-lg overflow-hidden place-content-center sm:m-9 hover:scale-[1.03]'>
            <div className='text-white my-12'><span className='bg-yellow-600 p-6 rounded-[100%] text-[27px]'><FontAwesomeIcon icon={faLocationDot} /></span></div>
                <div className=' py-2'>2118 Thornridge Cir, New York.</div>
                <div className=' py-2'>4140 Rd. Allentown, Mexico.</div>
            </div>
         </div>




         <div>
         <div className='font-bold text-2xl sm:text-6xl pt-7  py-5 text-center sm:px-[200px] '>Get in touch now!</div>
         <div className='text-1xl sm:text-2xl py-7 text-center  pt-7  py-5 px-12 sm:px-[200px]'>Is there an inquiry or some feedback for us? Fill out the form to contact our team. We love to hear from you.</div>
        
         <div className='h-[100vh] text-center flex justify-center '>
            <form className='bg-gray-50 w-full sm:w-3/6 p-2 sm:m-10'>
                <div><input className='outline-none sm:w-5/6 p-4 sm:m-3 bg-white-600' type='text' placeholder='Name'/></div>
                <div><input className='outline-none sm:w-5/6 p-4 sm:m-3 bg-white-600' type='text' placeholder='Email'/></div>
                <div><input className='outline-none sm:w-5/6 p-4 sm:m-3 bg-white-600' type='text' placeholder='Phone number'/></div>
                <div><textarea rows={7}  className='outline-none sm:w-5/6 p-4 sm:m-3 bg-white-600' type='text' placeholder='Message'/></div>
                <div><button className='w-5/6 p-4 m-3 bg-blue-600 text-white font-bold'>Message submit</button></div>
            </form>
         </div>

        
         </div>
      
    </div>
  )
}

export default Contactb
