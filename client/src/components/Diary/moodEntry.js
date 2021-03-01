import React, { useState, useMemo } from 'react';
import { Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import * as Diary from '../Diary';
import { Calendar } from 'react-date-range';
import moment from 'moment';
import { BsClock, BsTrash, BsPencilSquare } from 'react-icons/bs';
import { VscSmiley } from 'react-icons/vsc';
import { AiOutlineFrown, AiOutlineMeh } from 'react-icons/ai';

const dateFormat = 'M/DD/YY';

const MoodEntry = (props) => {
    const {
        entry,
        collapseAllTrigger,
        expandAllTrigger,
        deleteEntry,
        editEntry,
        theme
    } = props;

    const [ collapsed, setCollapsed ] = useState(true);

    const renderContent = () => {
        const iconSize = 20;
        let energetic = true;
        let pleasant = true;
        if (entry.energy < 5) {
            energetic = false;
        }
        if (entry.pleasantness < 5) {
            pleasant = false;
        }

        if (energetic && pleasant) {
            return <span className="text-success">{entry.label} <VscSmiley size={iconSize}/></span>;
        }
        else if (energetic || pleasant) {
            return <span className="text-primary">{entry.label} <AiOutlineMeh size={iconSize}/></span>;
        } else {
            return <span className="text-danger">{entry.label} <AiOutlineFrown size={iconSize}/></span>;
        }
    }

    const renderAdvice = () => {
        let energetic = true;
        let pleasant = true;
        if (entry.energy < 5) {
            energetic = false;
        }
        if (entry.pleasantness < 5) {
            pleasant = false;
        }

        if (energetic && pleasant) {
            return "Things are looking up! Keep doing what you're doing";
        }
        else if (energetic) {
            // Angry
            return "Try directing your energy towards things you enjoy.";
        } 
        else if (pleasant) {
            // Happy. No energy.
            return "You may need some rest, or perhaps motivation.";
        }
        else {
            return "Spend time with family and friends. Try doing things that make you happy.";
        }
    }

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
                                    {renderContent()} <span className="ml-2"> - {renderAdvice()}</span>
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
                            <div className="entry-content d-flex align-items-center">
                                {renderContent()} <span className="ml-2"> - {renderAdvice()}</span>
                            </div>
                            <div className="d-flex justify-content-end mt-2">
                                <Button onClick={() => deleteEntry(entry._id)} variant="white" style={{width: 100}}>Delete <BsTrash/></Button>
                            </div>
                        </>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default MoodEntry;