import React, { useState } from 'react';
import { Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import * as Diary from '../Diary';
import moment from 'moment';
import apis from '../../api/index';
import { Calendar } from 'react-date-range';
import { BsPencil } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { VscSmiley } from 'react-icons/vsc';

const dateFormat = 'M/DD/YY';

const NewEntry = (props) => {
    const { collapsed, setCollapsed, theme, setEntries } = props;
    const [ date, setDate ] = useState(moment(new Date()).format(dateFormat));
    const [ content, setContent ] = useState('');

    const changeDate = (_date) => {
        console.log("changeDate", _date);
        setDate(moment(_date).format(dateFormat));
    }
    const resetDate = () => {
        setDate(moment(new Date()).format(dateFormat));
    }

    const changeContent = (event) => {
        setContent(event.target.value);
    }

    const submit = () => {
        const toSubmit = {
            date,
            content,
            time: moment(new Date()).format('h:mma')
        }
        console.log("submit:: toSubmit", toSubmit);
        apis.createEntry(toSubmit).then(res => {
            const output = res.data.output;
            console.log("submit:: output", output);
            setEntries(old => [...old, output]);
        }).catch(e => {
            console.error("submit", e);
        })
    }

    return (
        <Row className="px-3">
            <Col>
                <div className="card pb-0">
                    {collapsed ? (
                        <>
                            <div className="entry-header collapsed">
                                <Form.Label>New Entry <BsPencil/></Form.Label>
                                <div className="collapsed-new-input">
                                    <Form.Control type="text" value={content} onChange={changeContent} />
                                    <Button onClick={submit} className="input-btn" variant="primary"><FaPaperPlane/></Button>
                                </div>
                                <Diary.Collapse collapsed={collapsed} setCollapsed={setCollapsed} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="entry-header">
                                <Form.Label>New Entry <BsPencil/></Form.Label>
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
                                <Form.Control as="textarea" rows={3} value={content} onChange={changeContent} />
                                <Button onClick={submit} variant="primary" block className="btn-sm form-btn">Submit <FaPaperPlane/></Button>
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