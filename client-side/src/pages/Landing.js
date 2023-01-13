import React from 'react'

function Landing() {
  return (
    // entire landing page
    <div className='font-manrope'> 
        <section className='flex flex-row w-full items-center pt-16 justify-between'>
            <div className='flex flex-col gap-2 items-start justify-center' style={{flexBasis:'50%'}}>
                <p className='text-green-600 tracking-[1px] font-semibold'>MEDEASY</p>
                <h1 className='text-5xl font-extrabold leading-normal'>Healthcare Solutions for a Better Life</h1>
                <p className='text-sm max-w-[90%] py-4 text-gray-800'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <form className='overflow-hidden flex flex-row items-center rounded-md border-2 border-gray-200 w-[60%]' >
                    <input className='w-[70%] p-2' type='email' placeholder='Enter your email'/>
                    <button className='bg-green-600 p-2 text-white  w-[40%]'>Get Started</button>
                </form>
            </div>
            <div style={{flexBasis:'50%'}}>
            <div className=' w-full relative'>
               <div className='w-10 absolute top-0 left-0 bg-yellow-300' style={{aspectRatio:1,zIndex:-1}}></div>
               <div className='w-20 absolute top-0 right-0 bg-yellow-300' style={{aspectRatio:1,zIndex:-1}}></div>
               <div className='w-20 absolute bottom-0 left-0 bg-yellow-300' style={{aspectRatio:1,zIndex:-1}}></div>
               <img className='m-auto p-8 z-10 w-full' src='https://cdn10.bigcommerce.com/s-p10g1rn/product_images/uploaded_images/medical-assistant.jpg'/>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Landing