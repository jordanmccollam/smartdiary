import React, { useState, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as Comp from '../../components';

const Main = () => {
    const [ collapsed, setCollapsed ] = useState(true);
    const [ collapseAllTrigger, setCollapseAllTrigger ] = useState(false);

    useMemo(() => {
        setCollapsed(true);
    }, [collapseAllTrigger])

    return (
        <Container fluid>
            <Row className="align-items-center max-vh">
                <Col md={4} className="side-menu">
                    <div className="themed-underline text-center">
                        <h1>Smart Diary</h1>
                        <h5>Property of User</h5>
                    </div>
                </Col>
                <Col className="main-content">
                    <Comp.Diary.NewEntry collapsed={collapsed} setCollapsed={setCollapsed} />
                    <Comp.Diary.ToolBar setCollapseAllTrigger={setCollapseAllTrigger} />
                    <div className={collapsed ? 'scrollable-content collapsed px-3' : 'scrollable-content px-3'}>
                        <Comp.Diary.Entries collapseAllTrigger={collapseAllTrigger} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;