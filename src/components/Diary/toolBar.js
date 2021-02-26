import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import * as Diary from '../Diary';
import { BsPencil, BsChevronUp, BsChevronDown, BsClock, BsChevronBarExpand } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { VscSmiley } from 'react-icons/vsc';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const toolSize = 24;

const ToolBar = (props) => {
    const { setCollapseAllTrigger } = props;

    const tools = [
        {
            icon: <BsChevronUp size={toolSize} />,
            action: () => setCollapseAllTrigger(old => !old),
            label: 'Collapse All'
        },
        {
            icon: <BsChevronUp size={toolSize} />,
            action: () => setCollapseAllTrigger(old => !old),
            label: 'Collapse All'
        },
        {
            icon: <BsChevronUp size={toolSize} />,
            action: () => setCollapseAllTrigger(old => !old),
            label: 'Collapse All'
        },
        {
            icon: <BsChevronUp size={toolSize} />,
            action: () => setCollapseAllTrigger(old => !old),
            label: 'Collapse All'
        },
    ]

    return (
        <Row className="px-3 justify-content-between">
            {tools.map((tool, index) => {
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
            })}
        </Row>
    )
}

export default ToolBar;