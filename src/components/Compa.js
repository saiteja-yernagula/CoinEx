import { useState,useEffect } from 'react';
import axios from 'axios';



const Compa = () => {


    const [coin,setCoin]=useState('')

    useEffect(()=>{getcrypto()},[])

    async function getcrypto(){
        let res=await axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=6`)
       
        setCoin(res.data.coins)
        
    }

  return (

    <div className="bg-black text-white px-12">
      <img src="https://jocular-bunny-e4edf5.netlify.app/img/icons/nice-arrow-down.svg" alt="dfj" className="absolute w-[100px] sm:w-[160px] "/>
        <div className='font-bold text-3xl sm:text-4xl pt-7 py-5 text-center sm:p-[100px] '>The most popular cryptocurrencies</div>
   
        <div className='py-7 text-black sm:grid grid-cols-3 gap-3 '>
            {
             (coin.length)>0 &&
              coin.map((crypto)=>{return(
                <div className='m-10 h-[35vh] py-10 bg-white max-w-sm p-6 rounded shadow-lg overflow-hidden sm:text-left sm:m-9 hover:scale-[1.03] '>
                <div className='flex flex-row  '>
                    <div><img alt="img" src={crypto.icon} /></div>
                     <div className='basis-2/3 ml-6 font-bolder'><span className='font-bold text-2xl py-4'>{crypto.name}</span><br/><span>cryptocurrency</span></div>
                </div>

                <div className='flex justify-between  '>
                    <div className='font-semibold text-2xl p-3'>${Math.round(crypto.price )}</div>
                     <div className='font-semibold text-1xl text-blue-600 border-2 border-indigo-600 p-3'>Buy now</div>
                </div>

            </div>
            )})            
            }
        </div>
  

           


    </div>
  )
}

export default Compa
