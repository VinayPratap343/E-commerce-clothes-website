import React from 'react';
import { assets } from '../assets/assets.js';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 items-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="text-center">
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Exchange Icon" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer a hassle-free exchange policy.</p>
      </div>

      <div className="text-center">
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="Exchange Icon" />
        <p className="font-semibold">Days Return policy</p>
        <p className="text-gray-400">We provide 7 days free return policy.</p>
      </div>

      <div className="text-center">
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Exchange Icon" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We prvide 24/7 customer support.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
