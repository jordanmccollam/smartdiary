import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap';
import * as Diary from '../Diary';
import Calendar from 'react-calendar';
import { DateRange } from 'react-date-range';
import moment from 'moment';
import { BsPencil, BsChevronUp, BsChevronDown, BsClock, BsChevronBarExpand, BsCalendar } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { VscSmiley, VscFilter } from 'react-icons/vsc';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const toolSize = 24;

const ToolBar = (props) => {
    const { setCollapseAllTrigger, filter, setFilter, initialFilter } = props;

    useEffect(() => {
        console.log("FILTER", filter);
    }, [filter])

    const changeFilter = (selection) => {
        // console.log("changeFilter", selection);
        setFilter(selection.filter);
    }
    const resetFilter = () => {
        setFilter(initialFilter);
    }

    const tools = [
        {
            icon: <BsChevronUp size={toolSize}/>,
            action: () => setCollapseAllTrigger(old => !old),
            label: 'Collapse All'
        },
        {
            icon: 
                <div style={{fontSize: 14}} className="text-secondary">
                    {moment(moment(filter.startDate).isBefore(filter.endDate) ? filter.startDate : filter.endDate).format('M/DD/YY')} - {moment(moment(filter.startDate).isAfter(filter.endDate) ? filter.startDate : filter.endDate).format('M/DD/YY')} 
                    <BsCalendar size={toolSize} className="mb-1 ml-2 text-primary" />
                </div>,
            label: 'Filter Entries',
            dropdown: [
                {
                    label: <DateRange
                        ranges={[filter]}
                        onChange={changeFilter}
                        rangeColors={['#004288']}
                        // color="#004288"
                    />
                },
                {
                    label: <Button block variant="white" onClick={resetFilter} >Reset</Button>
                },
            ]
        },
    ]

    return (
        <Row className="px-3 justify-content-between">
            {tools.map((tool, index) => {
                if (tool.dropdown) {
                    return (
                        <Col key={`tool-${index}`} >
                            <OverlayTrigger
                                placement='top'
                                overlay={
                                    <Tooltip id={`tool-tooltip-${index}`}>
                                        {tool.label}
                                    </Tooltip>
                                }
                            >
                                <Dropdown>
                                    <Dropdown.Toggle DropdownIndicator variant="clear" className="dropdown-card-btn" style={{width: '100%'}}>
                                        <div className="card py-2 card-btn" onClick={tool.action}>
                                            {tool.icon}
                                        </div>
                                    </Dropdown.Toggle>
                                
                                    <Dropdown.Menu>
                                        {tool.dropdown.map((toolItem, tIndex) => (
                                            <div key={`tool-item-${tIndex}`} onClick={toolItem.action ? toolItem.action : null}>
                                                {toolItem.label}
                                            </div>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </OverlayTrigger>
                        </Col>
                    )
                }
                else if (tool.action) {
                    return (
                        <Col key={`tool-${index}`} >
                            <OverlayTrigger
                                placement='top'
                                overlay={
                                    <Tooltip id={`tool-tooltip-${index}`}>
                                        {tool.label}
                                    </Tooltip>
                                }
                            >
                                <div className="card py-2 card-btn" onClick={tool.action}>
                                    {tool.icon}
                                </div>
                            </OverlayTrigger>
                        </Col>
                    )
                }
                else {
                    return <></>
                }
            })}
        </Row>
    )
}

export default ToolBar;