import React from 'react'
import BusinessSec1 from './BusinessPage/Section1';
import Navbar from './Navbar';
import Footer from './Footer';
import BusinessSec2 from './BusinessPage/Section2';


function Business()
{
    return(
    <div>
        <Navbar/>
        <BusinessSec1/>
        <BusinessSec2/>
        <Footer/> 
    </div>
        )
}

export default Business;