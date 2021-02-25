import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { VscSmiley } from 'react-icons/vsc';

const NewEntry = () => {
    return (
        <Row>
            <Col>
                <div className="card pb-3">
                    <div className="border-bottom border-secondary pb-3 mb-3">
                        <Form.Group className="m-0">
                            <Form.Label>New Entry <BsPencil/></Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" block className="btn-sm form-btn">Submit <FaPaperPlane/></Button>
                    </div>
                    
                    <Row>
                        <Col>
                            <Button block variant="white">Mood <VscSmiley size={20} className="mb-1" /></Button>
                        </Col>
                        <Col>
                            <Button block variant="white">Post</Button>
                        </Col>
                        <Col>
                            <Button block variant="white">Post</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default NewEntry;