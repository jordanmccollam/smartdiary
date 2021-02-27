import React, { useEffect, useState } from 'react';
import * as Comp from '../index';
import moment from 'moment';

const Entries = (props) => {
    const { 
        collapseAllTrigger, 
        filter,
        expandAllTrigger,
        entries
    } = props;
    const [ dates, setDates ] = useState([]);

    useEffect(() => {
        entries.forEach((entry, index) => {
            if (!dates.includes(entry.date)) {
                setDates(old => [...old.filter(o => o !== entry.date), entry.date]);
            }
        })
    }, [entries]);

    const calculateFilter = (date) => {
        const start = moment(filter.startDate).isBefore(filter.endDate) ? filter.startDate : filter.endDate;
        const end = moment(filter.startDate).isAfter(filter.endDate) ? filter.startDate : filter.endDate
        if (moment(date).isSameOrAfter(start) && moment(date).isSameOrBefore(end)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            {dates.filter(d => calculateFilter(d)).map((date, yIndex) => {
                return (
                    <div key={`year-${yIndex}`}>
                        <h4 className="date-header">{moment(date).format('ll')}</h4>
                        {entries.filter(e => e.date === date).map((entry, index) => {
                            return (
                                <Comp.Diary.Entry 
                                    key={`entry-${index}`}
                                    entry={entry}
                                    collapseAllTrigger={collapseAllTrigger}
                                    expandAllTrigger={expandAllTrigger}
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