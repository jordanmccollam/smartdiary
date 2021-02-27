import React, { useState, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as Comp from '../../components';
import moment from 'moment';

const initialFilter = {
    startDate: new Date(),
    endDate: new Date(moment().subtract(3, 'y')),
    key: 'filter'
}

const Main = () => {
    const [ collapsed, setCollapsed ] = useState(true);
    const [ collapseAllTrigger, setCollapseAllTrigger ] = useState(false);
    const [ filter, setFilter ] = useState(initialFilter);

    useMemo(() => {
        setCollapsed(true);
    }, [collapseAllTrigger])

    return (
        <Container fluid>
            <Row className="max-vh">
                <Col lg={3} className="side-menu d-none d-lg-block">
                    <div className="themed-underline text-center">
                        <h1>Smart Diary</h1>
                        <h5>Property of User</h5>
                    </div>
                </Col>
                <Col xs={12} className="d-lg-none">
                    <div className="themed-underline text-center mt-4">
                        <h1>Smart Diary</h1>
                        <h5>Property of User</h5>
                    </div>
                </Col>
                <Col className="main-content">
                    <Comp.Diary.NewEntry collapsed={collapsed} setCollapsed={setCollapsed} />
                    <Comp.Diary.ToolBar 
                        setCollapseAllTrigger={setCollapseAllTrigger} 
                        filter={filter} 
                        setFilter={setFilter} 
                        initialFilter={initialFilter}
                    />
                    <div className={collapsed ? 'scrollable-content collapsed px-3' : 'scrollable-content px-3'}>
                        <Comp.Diary.Entries 
                            collapseAllTrigger={collapseAllTrigger} 
                            filter={filter}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;