import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Main = () => {
    return (
        <Container fluid>
            <Row className="align-items-center max-vh">
                <Col md={4} className="side-menu">
                    <div className="themed-underline text-center">
                        <h1>Smart Diary</h1>
                        <h5>Property of User</h5>
                    </div>
                </Col>
                <Col className="main-content">
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Main;