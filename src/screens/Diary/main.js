import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as Comp from '../../components';

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
                    <Comp.Diary.NewEntry />
                    <div className="scrollable-content px-3">
                        <Comp.Diary.Entries />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;