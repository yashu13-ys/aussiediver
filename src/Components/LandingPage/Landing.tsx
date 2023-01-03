import React,{useEffect, useState} from 'react';
import DivingCommunity from './DivingCommunity';
import DivingLisence from './DivingLisence';
import FirstSection from './FirstSection';
import FourthSection from './FourthSection';
import OurPackages from './OurPackages';
import OurStories from './OurStories';
import SecondSection from './SecondSection';


const Landing = () => {


  useEffect(() => {

  }, []);

  return (
    <div>
      <FirstSection />
        <SecondSection />
        <OurPackages />
      <FourthSection />
        <DivingLisence />
     <DivingCommunity />
             <OurStories />
 </div>
  );
};

export default Landing;
