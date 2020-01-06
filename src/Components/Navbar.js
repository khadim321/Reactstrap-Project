import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Button } from 'reactstrap';
import './Navbar.css';
import logo from '../Components/logo.png';

const Khadim = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
    
        <Navbar className="navcolor" light expand="md">
          <img className="logoimage" src={logo} alt="logo"/>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Path</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/courses">Courses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Apprenticeship</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/business">Business</NavLink>
              </NavItem>
            </Nav>
          <NavLink href="/"><Button className="signbutton" outline color="secondary">Sign In</Button>{' '}</NavLink>
          <NavLink href="/signup"><Button className="signbutton" outline color="secondary">Sign Up</Button>{' '}</NavLink>
          </Collapse>
        </Navbar>
)
    }
export default Khadim;