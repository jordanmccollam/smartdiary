import { cs } from 'date-fns/locale';
import React from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { AiOutlineLogin } from 'react-icons/ai';

const Main = (props) => {
    const { signIn } = props;

    return (
        <Container fluid>
            <Row className="max-vh justify-content-center align-items-center">
                <Col md={5}>
                    <div className="card py-5">
                        <div className="themed-underline text-center">
                            <h1>Smart Diary</h1>
                        </div>

                        <div className="mt-5 px-5 mx-5">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;