import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import * as Diary from '../Diary';
import { BsPencil, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { VscSmiley } from 'react-icons/vsc';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const NewEntry = (props) => {
    const { collapsed, setCollapsed } = props;

    return (
        <Row className="px-3">
            <Col>
                <div className="card pb-0">
                    {collapsed ? (
                        <>
                            <div className="entry-header collapsed">
                                <Form.Label>New Entry <BsPencil/></Form.Label>
                                <div className="collapsed-new-input">
                                    <Form.Control type="text" />
                                    <Button className="input-btn" variant="primary"><FaPaperPlane/></Button>
                                </div>
                                <Diary.Collapse collapsed={collapsed} setCollapsed={setCollapsed} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="entry-header">
                                <Form.Label>New Entry <BsPencil/></Form.Label>
                                <Diary.Collapse collapsed={collapsed} setCollapsed={setCollapsed} />
                            </div>
                            <div className="border-bottom pb-3 mb-3">
                                <Form.Control as="textarea" rows={3} />
                                <Button variant="primary" block className="btn-sm form-btn">Submit <FaPaperPlane/></Button>
                            </div>
                            
                            <Row className="pb-2">
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
                        </>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default NewEntry;