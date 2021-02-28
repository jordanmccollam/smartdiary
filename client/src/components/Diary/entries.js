import React, { useEffect, useState, useMemo } from 'react';
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
        getDates();
    }, [entries]);

    const getDates = () => {
        let _dates = [];
        entries.forEach((entry, index) => {
            if (!_dates.includes(entry.date)) {
                _dates.push(entry.date);
            }
        })
        _dates.sort((a, b) => moment(b , ['MM/DD/YYYY']).format('YYYYMMDD') - moment(a.date + a.time, ['MM/DD/YYYY']).format('YYYYMMDD'));
        setDates(_dates);
    }

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

    useMemo(() => {
        getDates();
    }, [entries])

    return (
        <div>
            {dates.length > 0 ? (
                dates.filter(d => calculateFilter(d)).map((date, yIndex) => {
                    return (
                        <div key={`year-${yIndex}`}>
                            <h4 className="date-header">{moment(date).format('ll')}</h4>
                            {entries.filter(e => e.date === date).sort((a, b) => moment(b.time, ['h:mma']).format('hmm') - moment(a.time, ['h:mma']).format('hmm')).map((entry, index) => {
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
                })
            ) : (
                <div className="card py-5 text-center">
                    <div>You have no entries yet.</div>
                </div>
            )}
        </div>
    )
}

export default Entries;