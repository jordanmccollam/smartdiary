import React, { useState, useMemo, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import * as Comp from '../../components';
import moment from 'moment';
import { BsSun } from 'react-icons/bs';
import { RiMoonClearFill } from 'react-icons/ri';
import apis from '../../api';

const testEntries = [
    {
        date: '12/08/2020',
        time: '6:45pm',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        date: '11/17/2019',
        time: '11:30am',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        date: '12/08/2020',
        time: '7:13pm',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        date: '10/08/2020',
        time: '3:00pm',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
];

const testing = false;

const initialFilter = {
    startDate: new Date(),
    endDate: new Date(moment().subtract(3, 'y')),
    key: 'filter'
}

const Main = (props) => {
    const { toggleTheme, theme } = props;
    const [ collapsed, setCollapsed ] = useState(true);
    const [ collapseAllTrigger, setCollapseAllTrigger ] = useState(false);
    const [ expandAllTrigger, setExpandAllTrigger ] = useState(false);
    const [ filter, setFilter ] = useState(initialFilter);
    const [ entries, setEntries ] = useState([]);

    useEffect(() => {
        if (testing) {
            setEntries(testEntries);
        } else {
            apis.getEntries().then(res => {
                console.log("getEntries:: output", res.data.output);
                const _entries = res.data.output;
                setEntries(_entries);
            }).catch(e => {
                console.error("getEntries", e);
            })
        }
    }, [])

    useMemo(() => {
        if (entries && entries.length > 0) {
            entries.sort((a, b) => moment(b.date + b.time, ['MM/DD/YYYYh:mm a']).format('YYYYMMDDHHmm') - moment(a.date + a.time, ['MM/DD/YYYYh:mm a']).format('YYYYMMDDHHmm'));
        }
    }, [entries])

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
                    <div className="text-center mt-4">
                        {theme === 'theme--light' ? (
                            <Button variant="white" block onClick={toggleTheme}><BsSun className="text-warning" size={40} /></Button>
                        ) : (
                            <Button variant="white" block onClick={toggleTheme}><RiMoonClearFill className="text-primary" size={40} /></Button>
                        )}
                    </div>
                </Col>
                <Col xs={12} className="d-lg-none">
                    <div className="themed-underline text-center mt-4">
                        <h1>Smart Diary</h1>
                        <h5>Property of User</h5>
                    </div>
                </Col>
                <Col className="main-content">
                    <Comp.Diary.NewEntry 
                        collapsed={collapsed} 
                        setCollapsed={setCollapsed} 
                        setEntries={setEntries} 
                        theme={theme} 
                    />
                    <Comp.Diary.ToolBar 
                        setCollapseAllTrigger={setCollapseAllTrigger} 
                        setExpandAllTrigger={setExpandAllTrigger} 
                        filter={filter} 
                        setFilter={setFilter} 
                        initialFilter={initialFilter}
                        theme={theme}
                    />
                    <div className={collapsed ? 'scrollable-content collapsed px-3' : 'scrollable-content px-3'}>
                        <Comp.Diary.Entries 
                            collapseAllTrigger={collapseAllTrigger} 
                            expandAllTrigger={expandAllTrigger}
                            filter={filter}
                            entries={entries}
                            setEntries={setEntries}
                            theme={theme} 
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;