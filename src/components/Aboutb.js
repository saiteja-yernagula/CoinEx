import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBrain,faPeopleGroup, faHandsHoldingCircle} from '@fortawesome/free-solid-svg-icons'


const Aboutb = () => {
  return (
    <div className='p-12' style={{height:'100%'}}>
      <div>
         <div className='pt-[100px] sm:flex'>
          <div className='px-12'> <img src="https://jocular-bunny-e4edf5.netlify.app/img/home2/video-banner.jpg" alt='dfj' height={650}/></div>
          <div className='sm:w-[50%] sm:padding-[700px] sm:px-12'>
            <div  className='font-bold text-5xl py-4 mb-5 text-left'>The story behind how our company was founded</div>
            <div className='text-left '><p className='pt-4 text-2xl  font-thin'>It is our experience that equips us, our emotions that drive us, and our creativity that sets us apart.
            </p><p className='pt-4 text-2xl py-4  font-thin'>To help keep our clients focused on the complex modern marketing world, we create digital integrated campaigns. We believe that small businesses create the most unique attractive and meaningful place to work </p></div >
           
          </div>

         </div>
         </div>

         <div className='sm:flex py-7'>
            <div className='max-w-sm p-6 rounded  overflow-hidden sm:text-left sm:m-9 ; '>
                <div className='text-white my-12'><span className='bg-pink-600 p-6 rounded-[100%] text-[27px] '><FontAwesomeIcon icon={faBrain} /></span></div>
                <div className='font-bold text-2xl py-4 '>Creative Thinking</div>
                <div className='sm:w-[70%] py-2'>Creative thinking is the ability to consider something in a new way.</div>
            </div>

            <div className='max-w-sm p-6 rounded overflow-hidden sm:text-left sm:m-9 ;'>
             <div className='text-white my-12'><span className='bg-green-600 p-6 rounded-[100%] text-[27px]'><FontAwesomeIcon icon={faPeopleGroup} /></span></div>
                <div className='font-bold text-2xl py-4 '>Skilled Team</div>
                <div className='sm:w-[70%] py-2'>We have a skilled team. Those who work through their own experience.</div>
            
            </div>

            <div className='max-w-sm p-6 rounded  overflow-hidden sm:text-left sm:m-9 ;'>
            <div className='text-white my-12'><span className='bg-yellow-600 p-6 rounded-[100%] text-[27px]'><FontAwesomeIcon icon={faHandsHoldingCircle} /></span></div>
                <div className='font-bold text-2xl py-4 ;'>Maximum Service</div>
                <div className='sm:w-[70%] py-2'>Maximum service has been in the creative industry for over 30 years.
            </div>
            </div>
         </div>

         <div>
         <div className='pt-[100px] sm:flex sm:px-12'>
          <div className='sm:w-[50%] sm:padding-[700px] sm:px-12'>
            <div  className='font-bold text-5xl py-4 mb-5 text-left'>Our goal is to expand the digital agency</div>
            <div className='text-left '><p className='pt-4 text-2xl  font-thin'>The purpose of a mission statement is to communic organisation's purpose and direction to its employees, customers, vens, and other stakeholders. A mission statement also creates a sense identity for its employees provide the best customer results possible deliver.
            </p><p className='pt-4 text-3xl font-bold pt-4'><span className='text-blue-600 pr-14 mr-5'>250%</span> <span className='text-green-600'>99%</span> </p>
            <p className='pt-4 text-1xl py-4'><span className='text-blue-600 pr-12'>Happpy clients</span> <span className='text-green-600'> Customer satisfattion</span> </p></div >
          </div>
          <div className='px-12 '> <img src="https://jocular-bunny-e4edf5.netlify.app/img/about-img1.jpg" alt='dfj' height={650}/></div>
         </div>
         </div>


         <div className='font-bold mt-12 text-3xl sm:text-5xl pt-7 md:text-7xl py-5 text-left sm:px-[200px] '>Meet members of our creative team</div>
      
         <div className='sm:flex py-7'>
            <div className='max-w-sm m-4 rounded overflow-hidden sm:text-left  '>
                <div> <img  alt='h' src='https://img.freepik.com/free-photo/handsome-bearded-european-man-with-curious-gaze-wears-spectacles-basic-jumper-looks-directly-front-poses-against-beige-wall_273609-44165.jpg?w=740&t=st=1689765845~exp=1689766445~hmac=14b07868c337688c4f8c0fad50b0f698135036c422b1796c4d56cb331cef285d'/></div>
                <div className='font-bold text-2xl py-4 '>Johnny Scott</div>
                <div className='sm:w-[70%] py-2'>CEO and founder</div>
            </div>

            <div className='max-w-sm m-4 rounded  overflow-hidden sm:text-left '>
                <div><img alt='h' className='h-{100vh}' src='https://img.freepik.com/free-photo/photo-positive-european-female-model-makes-okay-gesture-agrees-with-nice-idea_273609-25629.jpg?w=740&t=st=1689765932~exp=1689766532~hmac=9a4757d90e7e6e7e9462d878eb947286ab99c0ff7be2307d0f25551142470c33'/></div>
                <div className='font-bold text-2xl py-4 '>Marion Keith</div>
                <div className='sm:w-[70%] py-2'> Content Writer/Marketer</div>
            </div>

            <div className='max-w-sm m-4 rounded overflow-hidden sm:text-left '>
            <div><img  alt='h' src='https://img.freepik.com/free-photo/studio-portrait-emotional-happy-funny-smiling-boyfriend-man-with-heavy-beard-stands-with-arms-crossed-dressed-red-t-shirt-isolated-blue_295783-458.jpg?w=740&t=st=1689766006~exp=1689766606~hmac=c1602573ce8f3e99b869e3205461d0350b1946204f3458097f0e036ca23aac64'/></div>
                
                <div className='font-bold text-2xl py-4 '>Romeo Noel</div>
                <div className='sm:w-[70%] py-2'> Graphic Designer
            </div>
            </div>

         </div>
         <div></div>

    </div>
  )
}

export default Aboutb
