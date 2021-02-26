import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import * as Diary from '../Diary';
import { BsPencil, BsChevronUp, BsChevronDown, BsClock } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { VscSmiley } from 'react-icons/vsc';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const Entry = (props) => {
    const {
        entry,
        collapseAllTrigger
    } = props;

    const [ collapsed, setCollapsed ] = useState(true);

    useMemo(() => {
        setCollapsed(old => !old);
    }, [collapseAllTrigger])

    return (
        <Row>
            <Col>
                <h4 className="month-header">{entry.date}</h4>
                <div className="card">
                    {collapsed ? (
                        <>
                            <div className="entry-header collapsed">
                                <Form.Label>{entry.time} <BsClock/></Form.Label>
                                <div className="entry-content collapsed">
                                    {entry.content}
                                </div>
                                <Diary.Collapse collapsed={collapsed} setCollapsed={setCollapsed} />
                            </div> 
                        </>
                    ) :(
                        <>
                            <div className="entry-header">
                                <Form.Label>{entry.time} <BsClock/></Form.Label>
                                <Diary.Collapse collapsed={collapsed} setCollapsed={setCollapsed} />
                            </div>
                            <div className="entry-content">
                                {entry.content}
                            </div>
                        </>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default Entry;