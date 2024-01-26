
import { Button, ListGroup } from 'react-bootstrap';
import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login with</h4>

                <Button className='mt-3' variant="outline-primary mb-2"> <FaGoogle /> Login With Google</Button>

                <Button variant="outline-secondary"> <FaGithub /> Log in with GitHub</Button>
            </div>
            <div className='mt-4'>
                <h3>Find on us</h3>
                <ListGroup >
                    <ListGroup.Item> <FaFacebook style={{color:"Blue"}} /> FaceBook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter style={{color:'red'}}></FaTwitter> Twiter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> Instragam</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;