import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import Home from '../Pages/Home/Home/Home';
import RightNav from '../Pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
         
            <Container>               
                <Row>
                    <Col sm={3}><LeftNav></LeftNav></Col>
                    <Col sm={6}><Home></Home></Col>
                    <Col sm={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;