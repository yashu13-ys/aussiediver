import React,{useEffect, useState} from 'react';
import './Header.css'
import { Button, Dropdown } from 'react-bootstrap';
import { To, useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileView, setMobileView] = useState(window.innerWidth <= 886);

  const navigate  = useNavigate()

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth <= 886) setMobileView(true);
      else setMobileView(false);
    }
    window.addEventListener('resize', updateSize);
  }, []);

function goTo(path: To){
  navigate(path)
}


  return (
    <div>
 <div className='headerDiv'>
<div className='containerDiv'>
    <div className="row address">
        <div className="col-sm-12 col-md-12 col-lg-6 headerContact">
            <div>
            <img src="Images/mailIcon.png" alt="" />
            <span>Email: info@aussiediversphuket.com</span>
            </div>
            <div>
            <img src="Images/LocalPhone.png" alt="" />
            <span>Email: info@aussiediversphuket.com</span>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 socialLogos">
        <img src="Images/Facebook.png" alt="" />
        <img src="Images/Instagram.png" alt="" />
        <img src="Images/owl.png" alt="" />
        <img src="Images/Twitter.png" alt="" />
        <img src="Images/YouTube.png" alt="" />
        </div>
    </div>
</div>

 </div>
<div className='mainHeaderContainer'>
  <div className='containerDiv'>
  
    <div className="row">
      <div className="col-lg-4 col-md-12 col-sm-12 mainLogoDiv">
<img onClick={()=>goTo('/')} className='mainLogo' src="Images/logo.png" />
</div>
<div className="col-lg-8 col-md-12 col-sm-12 headerLinks">
{!mobileView?
<>
  <div onClick={()=>goTo('/SCUBA DIVING')}>
  SCUBA DIVING
  </div>
  <div onClick={()=>goTo('/PADI COURSES')}>
  PADI COURSES
  </div>
  <div onClick={()=>goTo('/LIVEABOARDS')}>
  LIVEABOARDS
  </div>
  <div>
  <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      NEWS <img style={{marginLeft:10,width:'10px'}}  src="Images/downArrow.png" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="">News 1</Dropdown.Item>
        <Dropdown.Item href="">News 2</Dropdown.Item>
        <Dropdown.Item href="">News 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  <div>
  <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      FAQS <img style={{marginLeft:10,width:'10px'}}  src="Images/downArrow.png" /> 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="">FAQS 1</Dropdown.Item>
        <Dropdown.Item href="">FAQS 2</Dropdown.Item>
        <Dropdown.Item href="">FAQS 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  
  </div>
  <div onClick={()=>goTo('/CONTACT')}>
  CONTACT
  </div>
  <div>
  <img  src="Images/search.png" /> 
  </div>
  <div>
  <img  src="Images/language.png" />
  </div>
  </>
  :
  <div>
   <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <img src="Images/menuLogo.png" /> 
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="">SCUBA DIVING</Dropdown.Item>
        <Dropdown.Item href="">PADI COURSES</Dropdown.Item>
        <Dropdown.Item href="">LIVEABOARDS</Dropdown.Item>
        <Dropdown.Item href="">NEWS</Dropdown.Item>
        <Dropdown.Item href="">FAQS</Dropdown.Item>
        <Dropdown.Item href="">CONTACT</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  }
</div>
</div>

</div>
</div>
 </div>
  );
};

export default Header;
