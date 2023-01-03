import React,{useEffect, useState} from 'react';
import './Footer.css'


const Footer = () => {


  useEffect(() => {

  }, []);

  return (
    <div className='FooterSection'>
        <div className='footerMain row'>
            <div className="col-lg-3 col-md-6 col-sm-12 visitUs" style={{paddingLeft:'10px'}}>
                <div className="footerHead">
                OUR MISSION
                </div>
                <img src="Images/operated.png" alt="" />
                <p>Aussie Divers are quite simply the only choice for scuba diving Phuket while you are on holiday here in Thailand, we are 100% dedicated to ensuring your scuba diving experience with us is unforgettable & guarantee you'll be left craving more.

</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 visitUs">
                <div className="footerHead">
                VISIT US <img style={{marginLeft:5,marginBottom:5}} src="Images/location.png" alt="" />
                </div><br />
                <p style={{paddingRight:20}}>42, 17 Sunrise Rd, Chalong, Mueang Phuket District, Phuket 83150, Thailand</p>
                <p style={{paddingRight:20}}>27 Moo 2, Maehaad Beach Koh Tao (Suratthani เกาะเต่า, Ko Pha-ngan District, Surat Thani 84360, Thailand</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 visitUs">
                <div className="footerHead">
                CONTACT US <img style={{marginLeft:5,marginBottom:5}} src="Images/location.png" alt="" />
                </div><br />
                <p style={{paddingRight:20}}>Phone: (+66) 076 688 113 <br />
Email: info@aussiediversphuket.com <br />
Reviews: TripAdvisor (2,629)

</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <img className='mainLogo' src="Images/footerLogo.png" />
            <div className='footerBox'>
<div className='owlImgBox'>
    <img src="Images/footerOwl.png" alt="" />
</div>
<p>
If you are not sure about diving with us than check out our TripAdvisor, page were we have over 1,800 five star reviews, you certainly won't regret diving with us!
</p>
<div className='visitTrip'>
Visit Trip Advisor
</div>
            </div>
            </div>

        </div>
        <div className="footerLinkRow row">
            <div className="col-lg-6 col-sm-6 col-sm-12 footerLink">
<div>
Home
</div>
<div>
Team
</div>
<div>
Mission
</div>
<div>
Privacy
</div>
<div style={{color:'#00CB6A'}}>
Links
</div>
<div style={{color:'#25AFE8',fontWeight:700}}>
Subscribe to Our Blog
</div>
            </div>
            <div className="col-lg-6 col-sm-6 col-sm-12 footeCopyRight">
            © 2012 - 2022 Happy Fishies Co. LTD. Trading as Aussie Divers Phuket, All Rights Reserved
            </div>
        </div>
 </div>
  );
};

export default Footer;
