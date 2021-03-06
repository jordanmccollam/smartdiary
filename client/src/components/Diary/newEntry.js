import React, { useState } from 'react';
import { Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import * as Diary from '../Diary';
import moment from 'moment';
import apis from '../../api/index';
import { Calendar } from 'react-date-range';
import { BsPencil } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { VscSmiley } from 'react-icons/vsc';
import Mood from './mood';

const dateFormat = 'M/DD/YY';

const NewEntry = (props) => {
    const { collapsed, setCollapsed, theme, setEntries, user } = props;
    const [ date, setDate ] = useState(moment(new Date()).format(dateFormat));
    const [ content, setContent ] = useState('');
    const [ moodMeter, setMoodMeter ] = useState(false);

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

    const toggleMoodMeter = () => {
        setMoodMeter(!moodMeter);
    }

    const submit = () => {
        const toSubmit = {
            date,
            content,
            time: moment(new Date()).format('h:mma'),
            user: user._id
        }
        console.log("submit:: toSubmit", toSubmit);
        apis.createEntry(user.token, toSubmit).then(res => {
            const output = res.data.output;
            console.log("submit:: output", output);
            setEntries(old => [...old, output]);
        }).catch(e => {
            console.error("submit", e);
        })
        setDate(moment(new Date()).format(dateFormat));
        setContent('');
    }

    const submitMood = (mood) => {
        const toSubmit = {
            date,
            time: moment(new Date()).format('h:mma'),
            user: user._id,
            label: mood.label,
            energy: mood.value.y,
            pleasantness: mood.value.x
        }
        console.log("submitMood:: toSubmit", toSubmit);
        apis.createMood(user.token, toSubmit).then(res => {
            const output = res.data.output;
            console.log("submitMood:: output", output);
            setEntries(old => [...old, output]);
        }).catch(e => {
            console.error("submitMood", e);
        })
        setDate(moment(new Date()).format(dateFormat));
        setContent('');
    }

    return (
        <Row className="px-3">
            <Col>
                <div className="card pb-0">
                    {collapsed ? (
                        <>
                            <div className="entry-header collapsed">
                                <Form.Label><span className="d-none d-lg-inline">New Entry</span> <BsPencil/></Form.Label>
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
                                <Form.Label><span className="d-none d-sm-inline">New Entry</span> <BsPencil/></Form.Label>
                                <div className="d-flex align-items-center">
                                    <Dropdown className="new-entry-date-selector">
                                        <Dropdown.Toggle DropdownIndicator variant="white" className="text-secondary">
                                            Date: {date}
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
                            {moodMeter ? <Mood toggleMoodMeter={toggleMoodMeter} submit={submitMood} /> : (
                                <>
                                    <div className="new-entry-content" >
                                        <Form.Control as="textarea" rows={3} value={content} onChange={changeContent} />
                                        <Button onClick={submit} variant="primary" block className="btn-sm form-btn">Submit <FaPaperPlane/></Button>
                                    </div>

                                
                                    <Row className="pb-2">
                                        <Col>
                                            <Button onClick={toggleMoodMeter} block variant="white">Mood <VscSmiley size={20} className="mb-1" /></Button>
                                        </Col>
                                    </Row>
                                </>
                            )}
                        </>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default NewEntry;