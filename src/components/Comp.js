import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock,faPaperPlane,faChartBar } from '@fortawesome/free-solid-svg-icons'




const Comp = () => {
  

  return (
    <div className=' text-center p-12'>
        <div className='font-bold text-3xl sm:text-5xl pt-7 md:text-7xl py-5 text-left sm:px-[200px]'>The best crypto features you won't find anywhere else</div>
      
         <div className='sm:flex py-7'>
            <div className='max-w-sm p-6 rounded shadow-lg overflow-hidden sm:text-left sm:m-9 hover:scale-[1.03] '>
                <div className='text-white my-12'><span className='bg-pink-600 p-6 rounded-[100%] text-[27px] '><FontAwesomeIcon icon={faLock} /></span></div>
                <div className='font-bold text-2xl py-4 hover:text-blue-600'>Secure & Fast Payment</div>
                <div className='sm:w-[70%] py-2'>The most secure and fast payment can be made through cyptrocurrency</div>
            </div>

            <div className='max-w-sm p-6 rounded shadow-lg overflow-hidden sm:text-left sm:m-9 hover:scale-[1.03]'>
             <div className='text-white my-12'><span className='bg-green-600 p-6 rounded-[100%] text-[27px]'><FontAwesomeIcon icon={faChartBar} /></span></div>
                <div className='font-bold text-2xl py-4 hover:text-blue-600'>Reports & Analytics</div>
                <div className='sm:w-[70%] py-2'>View daily transaction reports & analytics easily through xmoze & improve business</div>
            </div>

            <div className='max-w-sm p-6 rounded shadow-lg overflow-hidden sm:text-left sm:m-9 hover:scale-[1.03]'>
            <div className='text-white my-12'><span className='bg-yellow-600 p-6 rounded-[100%] text-[27px]'><FontAwesomeIcon icon={faPaperPlane} /></span></div>
                <div className='font-bold text-2xl py-4 hover:text-blue-600'>Send & Receive Anytime</div>
                <div className='sm:w-[70%] py-2'>Send and receive money at any time with maximum security through xmoze app
            </div>
            </div>
         </div>
         
         <div>


         <div className='pt-[100px] sm:flex'>
          <div className='pr-10'> <img src="https://jocular-bunny-e4edf5.netlify.app/img/home1/block-img1.png" alt='dfj'/></div>
          
          <div className='sm:w-[50%] sm:padding-[700px]'>
            <div  className='font-bold text-5xl py-4 mb-5 text-left'>Earn interest from your crypto assets</div>
            <div className='text-left '><p className='pt-4 text-2xl'>The most popular crypto app of today. In which you can easily get convenient interest on sending & receiving money.
            </p><p className='pt-4 text-2xl py-4'>As this guide explains, investing in cryptocurrency comes with a ton of benefits. You do want to make sure you vet a currency before investing in it.
            </p></div >
            <div className='bg-blue-600 w-[30%] text-white p-3 mt-4 font-bold'>Get Started</div>
          </div>

         </div>
         </div>

        
    </div>
  )
}

export default Comp
