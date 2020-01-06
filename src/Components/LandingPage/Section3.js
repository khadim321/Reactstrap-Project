import React from 'react';
import {Row, Col} from 'reactstrap';
import './Section3.css';
import { Player } from 'video-react';


function Section3(){
    return(
        <section className="section3">
        <div className="container">
<Row>
    <Col lg="6" md="6" sm="12">
        <h1>See what we’re about</h1>
        <p>Become who you want to be with OpenClassrooms. 
        Choose your own career path and earn a diploma online with hands-on projects 
        and weekly one-on-one mentorship sessions with a dedicated professional in your 
        field. Gain experience on your CV with OpenClassrooms apprenticeship 
        programs and earn a salary while you learn.</p>
    </Col>
    <Col lg="6" md="6" sm="12">
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
    </Col>
</Row>
    </div>
        </section>
    )
}

export default Section3;