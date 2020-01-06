import React from 'react';
import '../BusinessPage/Business1.css';
import business from './business.png';
import { Row, Col, Button } from 'reactstrap';

function BusinessSec1(){
    return(
        <section className="businesssection1">
        <div className="container">
<Row>
    <Col lg="6" md="6" sm="12">
    <h1>Unlock your team's potentia</h1>
		<p>Find, train and deploy the talent your business needs.</p>
    <div class="">
		<a  type="button" href="#" class="btn btn-primary btn-lg">REQUEST A DEMO</a>
	</div>
    </Col>
    <Col lg="6" md="6" sm="12">
             <img src={business} alt="a-girl-pic" />
    </Col>
</Row>
    </div>
        </section>
    )
}

export default BusinessSec1;