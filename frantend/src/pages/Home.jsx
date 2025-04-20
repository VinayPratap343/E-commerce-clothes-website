import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy'; // Added missing import
import NewsLatterBox from '../components/NewsLatterBox';

const Home = () => {
  return (
    <main className="container mx-auto px-4">
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLatterBox />
    </main>
  );
};

export default Home;
