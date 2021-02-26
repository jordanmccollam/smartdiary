import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import * as Diary from '../Diary';
import { BsPencil, BsChevronUp, BsChevronDown, BsClock, BsArrowsCollapse } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { VscSmiley } from 'react-icons/vsc';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const toolSize = 22;

const ToolBar = (props) => {
    const { setCollapseAllTrigger } = props;

    const tools = [
        {
            icon: <BsArrowsCollapse size={toolSize} />,
            action: () => setCollapseAllTrigger(old => !old)
        },
        {
            icon: <FaPaperPlane size={toolSize} />,
            action: () => console.log("Action")
        },
        {
            icon: <FaPaperPlane size={toolSize} />,
            action: () => console.log("Action")
        },
        {
            icon: <FaPaperPlane size={toolSize} />,
            action: () => console.log("Action")
        },
    ]

    return (
        <Row className="px-3 justify-content-between">
            {tools.map((tool, index) => {
                return (
                    <Col key={`tool-${index}`} >
                        <div className="card py-3 card-btn" onClick={tool.action}>
                            {tool.icon}
                        </div>
                    </Col>
                )
            })}
        </Row>
    )
}

export default ToolBar;