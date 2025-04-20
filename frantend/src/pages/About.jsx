import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

       </div>
       <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to Infinity-Mart, your ultimate destination for the latest fashion trends and timeless styles! At Infinity-Mart, we believe that fashion is more than just clothing — it’s a way to express yourself, your mood, and your identity.</p>
        <p>Our e-store is designed to offer a seamless and enjoyable shopping experience, bringing you a wide range of high-quality apparel for every occasion. Whether you're looking for casual wear, office outfits, party attire, or seasonal essentials, Infinity-Mart has something for everyone.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>We are committed to offering the perfect blend of comfort, style, and affordability. Our collection is carefully curated to stay updated with the newest trends while ensuring that each piece meets the highest standards of quality.</p>

        </div>
       </div>
       <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Discover fashion that fits your style and your budget. We offer trendy, high-quality outfits with smooth shopping, fast delivery, and friendly support — all in one place!</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Shop anytime, anywhere — a smooth and hassle-free shopping experience, right at your fingertips.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We’re here for you — friendly support and quick solutions, every step of the way.</p>
         </div>
       </div>
       <NewsLatterBox/>
    </div>
  )
}

export default About
