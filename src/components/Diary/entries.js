import React, { useEffect, useState } from 'react';
import * as Comp from '../index';

const testEntries = [
    {
        year: '2020',
        date: 'Dec 08',
        time: '6:45pm',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        year: '2020',
        date: 'Nov 17',
        time: '11:30am',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        year: '2020',
        date: 'Dec 08',
        time: '7:13pm',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        year: '2019',
        date: 'Feb 25',
        time: '3:00pm',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
].sort((a, b) => b.year - a.year);

const Entries = (props) => {
    const { collapseAllTrigger } = props;
    const [ years, setYears ] = useState([]);

    useEffect(() => {
        testEntries.forEach((entry, index) => {
            if (!years.includes(entry.year)) {
                setYears(old => [...old.filter(o => o !== entry.year), entry.year]);
            }
        })
    }, [testEntries]);

    return (
        <div>
            {years.map((year, yIndex) => {
                return (
                    <div key={`year-${yIndex}`}>
                        <h3>{year}</h3>
                        {testEntries.filter(e => e.year === year).map((entry, index) => {
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