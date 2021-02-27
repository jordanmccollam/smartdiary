import React, { useState, useMemo } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import * as Diary from '../Diary';
import { BsClock, BsTrash, BsPencilSquare } from 'react-icons/bs';

const Entry = (props) => {
    const {
        entry,
        collapseAllTrigger,
        expandAllTrigger
    } = props;

    const [ collapsed, setCollapsed ] = useState(true);

    useMemo(() => {
        setCollapsed(false);
    }, [expandAllTrigger])

    useMemo(() => {
        setCollapsed(true);
    }, [collapseAllTrigger])

    return (
        <Row>
            <Col>
                <div className="card">
                    {collapsed ? (
                        <>
                            <div className="entry-header collapsed m-0">
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
                            <div className="d-flex justify-content-end mt-2">
                                <Button variant="white" style={{width: 100}}>Edit <BsPencilSquare className="mb-1"/></Button>
                                <Button variant="white" style={{width: 100}}>Delete <BsTrash/></Button>
                            </div>
                        </>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default Entry;