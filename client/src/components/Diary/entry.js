import React, { useState, useMemo } from 'react';
import { Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import * as Diary from '../Diary';
import { Calendar } from 'react-date-range';
import moment from 'moment';
import { BsClock, BsTrash, BsPencilSquare } from 'react-icons/bs';

const dateFormat = 'M/DD/YY';

const Entry = (props) => {
    const {
        entry,
        collapseAllTrigger,
        expandAllTrigger,
        deleteEntry,
        editEntry,
        theme
    } = props;

    const [ collapsed, setCollapsed ] = useState(true);
    const [ editing, setEditing ] = useState(null);
    const [ date, setDate ] = useState(moment(new Date()).format(dateFormat));
    const [ content, setContent ] = useState('');

    const stopEditing = () => {
        setEditing(null);
        setDate(moment(new Date()).format(dateFormat));
        setContent('');
    }

    const selectForEdit = (_entry) => {
        setDate(moment(_entry.date).format(dateFormat));
        setContent(_entry.content);
        setEditing(_entry);
    }

    const changeDate = (_date) => {
        console.log("changeDate", _date);
        setDate(moment(_date).format(dateFormat));
    }
    const resetDate = () => {
        setDate(moment(editing.date).format(dateFormat));
    }

    const changeContent = (event) => {
        setContent(event.target.value);
    }

    const confirmEdit = () => {
        const edit = {
            date: date,
            content: content
        }
        editEntry(editing._id, edit);
        stopEditing();
    }

    useMemo(() => {
        setCollapsed(false);
    }, [expandAllTrigger])

    useMemo(() => {
        setCollapsed(true);
    }, [collapseAllTrigger])

    useMemo(() => {
        if (collapsed === true) {
            stopEditing();
        }
    }, [collapsed])

    return (
        <Row>
            <Col>
                <div className="card">
                    {collapsed ? (
                        <>
                            <div className="entry-header collapsed m-0">
                                <Form.Label className="pr-2">{entry.time} <BsClock className="d-none d-lg-inline"/></Form.Label>
                                <div className="entry-content collapsed">
                                    {entry.content}
                                </div>
                                <Diary.Collapse collapsed={collapsed} setCollapsed={setCollapsed} />
                            </div> 
                        </>
                    ) :(
                        !editing ? (
                            <>
                                <div className="entry-header">
                                    <Form.Label className="pr-2">{entry.time} <BsClock className="d-none d-lg-inline"/></Form.Label>
                                    <Diary.Collapse collapsed={collapsed} setCollapsed={setCollapsed} />
                                </div>
                                <div className="entry-content">
                                    {entry.content}
                                </div>
                                <div className="d-flex justify-content-end mt-2">
                                    <Button onClick={() => selectForEdit(entry)} variant="white" style={{width: 100}}>Edit <BsPencilSquare className="mb-1"/></Button>
                                    <Button onClick={() => deleteEntry(entry._id)} variant="white" style={{width: 100}}>Delete <BsTrash/></Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="entry-header">
                                    <Form.Label className="pr-2">{editing.time} <BsClock className="d-none d-lg-inline"/></Form.Label>
                                    <div className="d-flex align-items-center">
                                        <Dropdown className="new-entry-date-selector">
                                            <Dropdown.Toggle DropdownIndicator variant="white" className="text-secondary">
                                                Date of post: {date}
                                            </Dropdown.Toggle>
                                        
                                            <Dropdown.Menu>
                                                <Calendar 
                                                    value={new Date(date)}
                                                    onChange={changeDate}
                                                    color={theme === 'theme--light' ? '#004288' : '#cb6d56'}
                                                />
                                                <Button block variant="white" onClick={resetDate} >Reset</Button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Diary.Collapse collapsed={collapsed} setCollapsed={setCollapsed} />
                                    </div>
                                </div>
                                <div className="new-entry-content" >
                                    <Form.Control as="textarea" rows={3} value={content} onChange={changeContent} className="rounded-borders" />
                                    {/* <Button onClick={submit} variant="primary" block className="btn-sm form-btn">Confirm</Button> */}
                                </div>
                                <div className="d-flex justify-content-end mt-2">
                                    <Button onClick={stopEditing} variant="white" style={{width: 100}}>Cancel</Button>
                                    <Button onClick={confirmEdit} variant="white" style={{width: 100}}>Confirm</Button>
                                </div>
                            </>
                        )
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default Entry;