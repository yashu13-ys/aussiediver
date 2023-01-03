import React,{useEffect, useState} from 'react';
import './FirstSection.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Button } from 'react-bootstrap';

const FirstSection = () => {


  useEffect(() => {

  }, []);

  return (
    <AwesomeSlider className='sliderDiv' animation="cubeAnimation" >
    <div className='slider1'>
        <div className='backgroundBlur'></div>
        <div className='sliderData1'>
    <h1>GET YOUR</h1>
    <img className='padi' src="Images/PADI.png" alt="" />
    <h1>DIVING LICENCE</h1>
    <p>Your PADI Open Water course is the first step into the wondrous <br /> and fascinating world that is scuba diving. </p>
    <Button className='readMoreBtn'>
READ MORE
</Button>
    </div>
    </div>
    <div className='slider2'>
    <div className='backgroundBlur'></div>
    <div className='sliderData1'>
    <h1>GET YOUR</h1>
    <img className='padi' src="Images/PADI.png" alt="" />
    <h1>DIVING LICENCE</h1>
    <p>Your PADI Open Water course is the first step into the wondrous <br /> and fascinating world that is scuba diving. </p>
    <Button className='readMoreBtn'>
READ MORE
</Button>
    </div>
    </div>
    <div className='slider3'>
    <div className='backgroundBlur'></div>
    <div className='sliderData1'>
    <h1>GET YOUR</h1>
    <img className='padi' src="Images/PADI.png" alt="" />
    <h1>DIVING LICENCE</h1>
    <p>Your PADI Open Water course is the first step into the wondrous <br /> and fascinating world that is scuba diving. </p>
    <Button className='readMoreBtn'>
READ MORE
</Button>
    </div>
        </div>
  </AwesomeSlider>
  
  );
};

export default FirstSection;
