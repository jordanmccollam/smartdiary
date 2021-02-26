import React, { useState, useMemo } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import * as Diary from '../Diary';
import { BsClock } from 'react-icons/bs';

const Entry = (props) => {
    const {
        entry,
        collapseAllTrigger
    } = props;

    const [ collapsed, setCollapsed ] = useState(true);

    useMemo(() => {
        setCollapsed(true);
    }, [collapseAllTrigger])

    return (
        <Row>
            <Col>
                <h6 className="month-header">{entry.date}</h6>
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
                        </>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default Entry;