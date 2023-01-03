import React,{useEffect, useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import './DivingCommunity.css'

const DivingCommunity = () => {

  const [mobileView, setMobileView] = useState(window.innerWidth <= 886);

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth <= 886) setMobileView(true);
      else setMobileView(false);
    }
    window.addEventListener('resize', updateSize);
  }, []);

  return (
        <div className='divingCommunity'>
          <div className='divingBgBlur'></div>
          {!mobileView ?
    <div className='communitySection row'>
      <div className='col-sm-7 col-md-7 col-sm-12'>

      </div>
      <div className='col-sm-5 col-md-5 col-sm-12 divingData'>
    <h1>A DIVING <br />
COMMUNITY IN <br /> PHUKET</h1>
<p>Here at Aussie Divers we don't just consider ourselves a dive shop, we think of it as more, a big family of like minded individuals coming together to enjoy the marine environment here in Phuket & Thailand.</p>
<Button className='readMoreBtn'>
READ MORE
</Button>
</div>
 </div>
 :
 <div className='mobileDivingDiv'>
      <h1>A DIVING <br />
COMMUNITY IN <br /> PHUKET</h1>
<p>Here at Aussie Divers we don't just consider ourselves a dive shop, we think of it as more, a big family of like minded individuals coming together to enjoy the marine environment here in Phuket & Thailand.</p>
<Button className='readMoreBtn'>
READ MORE
</Button>
 </div>
          }
 </div>
  );
};

export default DivingCommunity;
