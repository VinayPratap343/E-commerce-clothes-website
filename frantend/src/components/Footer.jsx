import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32 ' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>At Infinity Mart, we believe shopping should be smart, simple, and satisfying. From everyday essentials to exclusive deals, we bring you a seamless shopping experience right at your fingertips. Discover quality products at great prices and enjoy the convenience of safe and reliable delivery, only at Infinity Mart — your trusted destination for everything you need.

            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 123 456 7890</li>
                <li>contact@infinityMart.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'> Copyright 2025@ Infinity.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
