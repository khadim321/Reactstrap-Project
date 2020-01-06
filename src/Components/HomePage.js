import React from 'react';

import Section1 from './LandingPage/Section1';
import Section2 from './LandingPage/Section2';
import Section3 from './LandingPage/Section3';
import Navigation from './LandingPage/Carousel';
import Footer from './Footer';
import Navbar from './Navbar'


function HomePage(){
  return(
<div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Navigation/>
      <Footer/>  
</div>
  )
}

export default HomePage;