import React, { useState, useMemo, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import * as Comp from '../../components';
import moment from 'moment';
import { BsSun, BsArrowUp } from 'react-icons/bs';
import { RiMoonClearFill } from 'react-icons/ri';
import { AiOutlineLogout } from 'react-icons/ai';
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
    const { toggleTheme, theme, signOut, user } = props;
    const [ collapsed, setCollapsed ] = useState(true);
    const [ collapseAllTrigger, setCollapseAllTrigger ] = useState(false);
    const [ expandAllTrigger, setExpandAllTrigger ] = useState(false);
    const [ filter, setFilter ] = useState(initialFilter);
    const [ entries, setEntries ] = useState([]);
    const [ moods, setMoods ] = useState([]);

    useEffect(() => {
        console.log("User", user);
        if (user) {
            setEntries([...user.entries, ...user.moods]);
        }
    }, [user])

    useMemo(() => {
        if (entries && entries.length > 0) {
            entries.sort((a, b) => moment(b.date + b.time, ['MM/DD/YYYYh:mm a']).format('YYYYMMDDHHmm') - moment(b.date + b.time, ['MM/DD/YYYYh:mm a']).format('YYYYMMDDHHmm'));
            setMoods(entries.filter(e => e.hasOwnProperty('energy')));
        }
    }, [entries])

    useMemo(() => {
        setCollapsed(true);
    }, [collapseAllTrigger])

    return (
        <Container fluid>
            <Row className="max-vh">
                <Col lg={3} className="side-menu d-none d-xl-block">
                    <div className="themed-underline text-center">
                        <h1>Smart Diary</h1>
                        <h5>Property of {user.nickname}</h5>
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                    <div className="text-center mt-4">
                            {theme === 'theme--light' ? (
                                <Button variant="light" block onClick={toggleTheme}><BsSun className="text-warning" size={40} /></Button>
                            ) : (
                                <Button variant="light" block onClick={toggleTheme}><RiMoonClearFill className="text-primary" size={40} /></Button>
                            )}
                        </div>
                        {moods.length > 0 && (
                            <Button variant="light" className="mt-3">
                                <Comp.Graphs.Moods 
                                    theme={theme} 
                                    moods={moods}
                                    title={moment(new Date()).format('YYYY') + ' Moods'}
                                />
                            </Button>
                        )}
                        <Button onClick={signOut} variant="light" block className="text-primary mt-3 py-2" >Sign Out <AiOutlineLogout size={25} /></Button>
                    </div>
                </Col>
                <Col xs={12} className="d-xl-none">
                    <div className="themed-underline text-center mt-4">
                        <h4>Smart Diary of {user.nickname}</h4>
                    </div>
                </Col>
                <Col className="main-content my-4 mx-xl-4 px-1">
                    <Row className="justify-content-center d-xl-none px-3">
                        <Col xs={6}>
                            {theme === 'theme--light' ? (
                                <Button variant="light" className="text-primary btn-sm" block onClick={toggleTheme}>Light Mode <BsSun size={25} /></Button>
                            ) : (
                                <Button variant="light" className="text-primary btn-sm" block onClick={toggleTheme}>Dark Mode <RiMoonClearFill size={25} /></Button>
                            )}
                        </Col>
                        <Col xs={6}>
                            <Button onClick={signOut} variant="light" block className="d-block text-primary btn-sm mb-2" >Sign Out <AiOutlineLogout size={25} /></Button>
                        </Col>
                    </Row>
                    <Comp.Diary.NewEntry 
                        collapsed={collapsed} 
                        setCollapsed={setCollapsed} 
                        setEntries={setEntries} 
                        theme={theme} 
                        user={user}
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
                            moods={moods}
                            setMoods={setMoods}
                            entries={entries}
                            setEntries={setEntries}
                            theme={theme} 
                            user={user}
                        />
                    </div>
                    <Button onClick={() => window.scrollTo(0, 0)} variant="primary" className="back-to-top d-xl-none"><BsArrowUp /></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;