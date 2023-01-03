import React,{useEffect, useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import './SecondSection.css'


const SecondSection = () => {


  useEffect(() => {

  }, []);

  return (
    <div className='secondSection'>
    <div className='secondSectionContainerDiv'>
      <div className='secondSectionBgBlur'></div>
    <h1>SCUBA-DIVING <br />
IN PHUKET, THAILAND</h1>
<p>Ever wonder why so many people come to Thailand every year to learn how to scuba dive? Well the answer to that is simple, waters here are warm, currents here are mild and the fish, critter & coral life are truly world class.</p>
<Button className='readMoreBtn' style={{zIndex:2}}>
READ MORE
</Button>
 </div>
 </div>
  );
};

export default SecondSection;
