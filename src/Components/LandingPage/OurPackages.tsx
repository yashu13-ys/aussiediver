import React,{useEffect, useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import './OurPackages.css'
import {PackagesData} from './OurPackagesData'
import img1 from '../../Images/PADI.png'

const OurPackages = () => {

  useEffect(() => {

  }, []);

  return (
    <div className='OurPackages'>
<div className='OurPackagesHead'>
    <h1>OUR PACKAGES</h1>
    <p>Here are some of our options for literally the best scuba diving in Phuket, Thailand & the Similan Islands.</p>
</div>

<div className='packagesMainDiv'>
{PackagesData && PackagesData.map((data) => (
    <div className='packageData'>
    <div className='package'>
        <div className='packageBgBlur'></div>
<div className='packageName'>{data.name}</div>

<img className='packageImg' src={data.image} alt="" />
</div>
</div>
     )
     )}
     </div>



 </div>
  );
};

export default OurPackages;
