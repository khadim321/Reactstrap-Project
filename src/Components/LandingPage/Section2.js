import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import image from '../LandingPage/image.jpg';
import './Section2.css'


function Section2(){
    return(
        <section className="section2">
        <div className="container">
<Row>
    <Col lg="4" md="4" sm="12">
    <div>
  		<img src={image} alt="Card images"/>
  		<div className="card-body">
    	<h4 className="card-title">Diploma qualification</h4>
    	<p>Earn a bachelor’s- or master’s-level diploma to 
    	unlock your new career</p>
  	</div>
  	</div>
    </Col>
    <Col lg="4" md="4" sm="12">
    <div class="">
  		<img src={image} alt="Card images"/>
  		<div className="card-body">
    	<h4 className="card-title">Mentorship</h4>
    	<p>Benefit from weekly, one-on-one sessions with an 
    		expert in your field.</p>
  	</div>
  	</div>
    </Col>
    <Col lg="4" md="4" sm="12">
    <div className="">
  		<img src={image} alt="Card images"/>
  		<div className="card-body">
    	<h4 className="card-title">Job guarantee</h4>
    	<p>Receive career coaching to help you find a job within 
        6 months or your money back</p>
  	</div>
  	</div>
    </Col>
</Row>
        </div>
        </section>
    )
}

export default Section2;