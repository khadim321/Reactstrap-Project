import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './SignUpSec1.css';


const SignupSec1 = (props) => {
    return (
    <section className="signup">
    <div className="Formbg">
      <Form className="Form">
          <h1>Sign Up</h1><br/>
        <FormGroup>  
        <Input type="Fname" name="name" id="Fname" placeholder="Enter your First name. .." 
        required autocomplete="off"/>
        </FormGroup>
        <FormGroup>

        <Input type="Lname" name="name" id="Lname" placeholder="Enter your Last name. .." 
        required autocomplete="off"/>
        </FormGroup>
        <FormGroup>

        <Input type="email" name="email" id="email" placeholder="Enter your Email address. .."
        required autocomplete="off" />
        </FormGroup>
        <p>We will send your password to this address.</p>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I have read and I accept the Terms of Use and the Privacy Policy.
          </Label>
          <Label check>
            <Input type="checkbox" />{' '}
            Keep me updated about new courses and paths at OpenClassrooms.
            </Label>
        </FormGroup><br/>
        <Button>Submit</Button>
        <p>
        <br/><span>Already have an account?</span>
			<a href="/">
			    <span>Sign In</span>
			</a>
		</p>
      </Form>
    </div>
    </section>
    )
}

export default SignupSec1;