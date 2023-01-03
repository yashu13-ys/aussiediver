import React,{useEffect, useState} from 'react';
import { Button, Container } from 'react-bootstrap';
// import './OurPackages.css'
import {LisenceData} from './DivingLisenceData'

const DivingLisence = () => {


  useEffect(() => {

  }, []);

  return (
    <div className='OurPackages'>
<div className='OurPackagesHead'>
    <h1>GET YOUR PADI DIVING LISENCE</h1>
    <p>Become a certified scuba diver today by getting you PADI Open Water license or continue your dive education with one of our specialty courses</p>
</div>

<div className='packagesMainDiv'>
{LisenceData && LisenceData.map((data) => (
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

export default DivingLisence;
