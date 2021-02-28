import React, { useEffect, useState } from 'react';
import * as Comp from '../index';
import moment from 'moment';
import apis from '../../api';

const Entries = (props) => {
    const { 
        collapseAllTrigger, 
        filter,
        expandAllTrigger,
        entries,
        setEntries,
        theme
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

    const deleteEntry = (id) => {
        console.log("deleteEntry:: deleting", id);
        apis.deleteEntry(id).then(res => {
            console.log("deleteEntry:: res", res);
            console.log("deleteEntry:: output", res.data.output);
            setEntries(old => old.filter(o => o._id !== res.data.output));
        }).catch(e => {
            console.error('deleteEntry', e);
        })
    }

    const editEntry = (id, body) => {
        console.log("editEntry:: editing", id);
        apis.updateEntry(id, body).then(res => {
            console.log("editEntry:: res", res);
            console.log("editEntry:: output", res.data.output);
            setEntries(old => [...old.filter(o => o._id !== res.data.output._id), res.data.output]);
        })
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
                                    deleteEntry={deleteEntry}
                                    editEntry={editEntry}
                                    theme={theme} 
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