import React from 'react';
import './Section1.css';
import boy from '../LandingPage/boy.png';
import { Row, Col, Button } from 'reactstrap';

function Section1(){
    return(
        <section className="section1">
        <div className="container">
<Row>
    <Col lg="6" md="6" sm="12">
        <img src={boy} alt="boy" />
    </Col>
    <Col lg="6" md="6" sm="12">
        <div className="heading">
			<h1>
			<span class="spn">Become<br/>
			Future-Proof</span>
			</h1>
		</div>
		<div className="paragraph">
			<p>
			<span>Get the skills of tomorrow.<br/>
			Learn to learn efficiently.<br/>
			Take control of your career for good.
			</span> 
			</p>
		</div>
        <div class="discover">
        <Button outline color="secondary">DISCOVER</Button>{' '}
		</div>
    </Col>
</Row>
    </div>
        </section>
    )
}

export default Section1;