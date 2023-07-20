import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';


const Navbar = () => {
  return (
    <>
    <div className=' flex justify-between text-white p-12 ' style={{background:'blue'}} >
     <Link to='/'><div className='text-4xl sm:text-6xl font-bold'>CoinEx</div></Link>
      <div >
        <ul className='flex text-1xl sm:text-3xl '>
         <Link to='/about'><li className='p-3 sm:px-6 hidden sm:block hover:underline semibold'>About </li></Link> 
         <Link to='/services'><li className='p-3 sm:px-6 hidden sm:block  hover:underline'>Services</li></Link>
         <Link to='/contact'><li className='p-3 sm:px-6 hidden sm:block  hover:underline'>Contact</li></Link>
        </ul>



<div className="dropdown">
  
  <button data-collapse-toggle="navbar-multi-level" type="button" class=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

  <div className="dropdown-content">
    <Link to='/about'><a href="/about">About </a></Link>
    <Link to='/services'><a href="/services">Services</a></Link>
    <Link to='/contact'><a href="/contact">Contact</a></Link>
  </div>
</div>



      </div>
    </div>
    
    
    </>
   
  )
}

export default Navbar
