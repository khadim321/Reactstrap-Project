import React from 'react';
import './Footer.css'
import { Row, Col, Button } from 'reactstrap';


function Footer(){
    return(
        <section className="FooterStyle">
        <div className="container">
<Row>
    <Col lg="3" md="3" sm="12">
    <div className="footer">
  			<h2>Open Classrooms</h2><br/>

  			<a href="http://www.google.com">What we do</a><br/>
  			<a href="http://www.google.com">Apprenticeship</a><br/>
  			<a href="http://www.google.com">Our blog</a><br/>
  			<a href="http://www.google.com">Work at OpenClassrooms</a><br/>

  	</div>
    </Col>
    <Col lg="3" md="3" sm="12">
    <div className="footer">
		    <h2>Business solutions</h2><br/>

			<a href="http://www.google.com">Business</a><br/>

  	</div>   
    </Col>
    <Col lg="3" md="3" sm="12">
    <div className="footer">
  			<h2>Learn more</h2>
  			<div className="learnmore">
  			<a href="http://www.google.com">Become a mentor</a><br/>
  			<a href="http://www.google.com">Help and FAQ</a><br/>
  			<a href="http://www.google.com">Terms of Use</a><br/>
  			<a href="http://www.google.com">Privacy Policy</a><br/>
  			<a href="http://www.google.com">Contact us</a><br/>
  			</div>
  	</div>
    </Col>
    <Col lg="3" md="3" sm="12">
    <div className="dropup">
    <button type="button" class="btn btn dropdown-toggle" data-toggle="dropdown">
      English
    </button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">English</a>
      <a className="dropdown-item" href="#">Francais</a>
    </div>
    </div>
    <div className="icon">

  		<a href="#"><i class="fa fa-facebook"></i></a>
  		<a href="#"><i class="fa fa-twitter"></i></a>
  		<a href="#"><i class="fa fa-youtube"></i></a>

  	</div>
      <div className="lastdiv">
            <a href="#" className="btn btn-store">
                <span className="fa fa-apple fa-3x pull-left"></span> 
                <span className="btn-label">Download on the</span>
                <span className="btn-caption">App Store</span>
            </a>
        </div>
    </Col>
</Row>
    </div>
        </section>
    )
}

export default Footer;