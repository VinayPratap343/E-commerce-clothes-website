import React from 'react'

const NewsLatterBox = () => {

    const onSubmitHandler = () => {
        Event.preventDefault()

    }
  return (
   
    <div className='text-center'>
        <p className='text-2x1 font-medium text-gray-800'>subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab 
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your Email' className='w-fall sm:flex-1 outline-none' required/>
            <button type='submit'className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsLatterBox
