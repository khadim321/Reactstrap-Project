import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import SignupSec1 from './SignUpPage/SignUpSec1'



function SignUp()
{
    return(
    <div>
        <Navbar/>
           <SignupSec1/> 
        <Footer/>
    </div>
        )
}

export default SignUp;