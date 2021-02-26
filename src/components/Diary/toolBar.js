import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap';
import * as Diary from '../Diary';
import { BsPencil, BsChevronUp, BsChevronDown, BsClock, BsChevronBarExpand, BsCalendar } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { VscSmiley, VscFilter } from 'react-icons/vsc';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const toolSize = 24;

const ToolBar = (props) => {
    const { setCollapseAllTrigger } = props;

    const tools = [
        {
            icon: <BsChevronUp size={toolSize}/>,
            action: () => setCollapseAllTrigger(old => !old),
            label: 'Collapse All'
        },
        {
            icon: <div style={{fontSize: 14}}>{'02/12/test'} <BsCalendar size={toolSize} className="mb-1 ml-2 text-primary"/></div>,
            label: 'Filter Entries',
            dropdown: [
                {
                    label: 'Action',
                    action: () => console.log("Action")
                }
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
                                            <Dropdown.Item onClick={toolItem.action} key={`tool-item-${tIndex}`}>{toolItem.label}</Dropdown.Item>
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