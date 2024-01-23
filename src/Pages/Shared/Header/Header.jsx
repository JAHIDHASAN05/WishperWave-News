import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button,  } from 'react-bootstrap';
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
         
        </div>
    );
};

export default Header;