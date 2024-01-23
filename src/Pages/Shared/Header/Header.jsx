import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar,  } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div className='container mb-5'>
            <div className='mt-5 mb-5 text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format('MMMM D, YYYY, ')}</p>

            </div>
          <div className='d-flex'>
          <Button variant="danger">Danger</Button>
            <Marquee speed={100}>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
          </div>



          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mt-5">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                            
                        </Nav>
                        <Nav >
                            <Nav.Link href="#deets" className='my-auto'>Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <Button variant="secondary">Secondary</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;