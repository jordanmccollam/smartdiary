import React, { useEffect, useState } from 'react';
import * as Comp from '../index';
import moment from 'moment';

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
].sort((a, b) => moment(b.date + b.time, ['MM/DD/YYYYh:mm a']).format('YYYYMMDDHHmm') - moment(a.date + a.time, ['MM/DD/YYYYh:mm a']).format('YYYYMMDDHHmm'));

const Entries = (props) => {
    const { collapseAllTrigger } = props;
    const [ dates, setDates ] = useState([]);

    useEffect(() => {
        testEntries.forEach((entry, index) => {
            if (!dates.includes(entry.date)) {
                setDates(old => [...old.filter(o => o !== entry.date), entry.date]);
            }
        })
    }, [testEntries]);

    return (
        <div>
            {dates.map((date, yIndex) => {
                return (
                    <div key={`year-${yIndex}`}>
                        <h4 className="date-header">{moment(date).format('ll')}</h4>
                        {testEntries.filter(e => e.date === date).map((entry, index) => {
                            return (
                                <Comp.Diary.Entry 
                                    key={`entry-${index}`}
                                    entry={entry}
                                    collapseAllTrigger={collapseAllTrigger}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Entries;