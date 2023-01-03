import React,{useEffect, useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import './FourthSection.css'

const FourthSection = () => {


  useEffect(() => {

  }, []);

  return (
        <div className='fourthSection'>
          <div className='fourthSectionBgBlur'></div>
    <div className='secondSectionContainerDiv'>
    <h1>DIVING WITH AUSSIE<br />DIVERS, PHUKET</h1>
<p>Aussie Divers Phuket is a PADI 5 Star IDC Dive Centre and the home to Phuket's most professional scuba diving education. With a great range of PADI courses, fantastic instructors, we are simply the best place to book a scuba diving day trip or Similan Island liveaboard adventure whilst on holiday here in Phuket.</p>
<Button className='readMoreBtn' style={{zIndex:0}}>
Dive with an aussie diver
</Button>
 </div>
 </div>
  );
};

export default FourthSection;
