import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './Carousel.css';
import image1 from '../LandingPage/image1.jpg';
import image2 from '../LandingPage/image2.png';
import image3 from '../LandingPage/image3.jpg';


const items = [
  {
    src: image1,
    altText: 'Slide 1',
    caption: 'FACEBOOK #01',
    header: 'FACEBOOK Slide 1 Header',
    key: '1'
  },
  {
    src: image2,
    altText: 'Slide 2',
    caption: 'FACEBOOK #02',
    header: 'FACEBOOK Slide 2 Header',
    key: '2'
  },
  {
    src: image3,
    altText: 'Slide 3',
    caption: 'FACEBOOK #03',
    header: 'FACEBOOK Slide 3 Header',
    key: '3'
  }
];

const Navigation = () => {
    return(
    <div className="Carousel">
    <UncontrolledCarousel items={items} />
    </div>
    );
}

export default Navigation;