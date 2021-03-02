import React, { useEffect, useState } from 'react';
import {
    LineChart, XAxis, Tooltip, Line, CartesianGrid
} from 'recharts';
import moment from 'moment';
import { BsDot } from 'react-icons/bs';

  const exampledata = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

const AnnualMood = (props) => {
    const { theme, moods, title, recent } = props;
    const [ data, setData ] = useState([]);

    useEffect(() => {
        renderData();
    }, [moods])

    const renderData = () => {
        let _data = [];
        moods.forEach(mood => {
            _data.push({label: mood.date, energy: mood.energy, pleasantness: mood.pleasantness, amt: parseInt(moment(mood.date).format('YYYYMMDD'))})
        });
        _data.sort((a, b) => a.amt - b.amt);
        if (recent) {
          _data.slice(0, 5);
        }
        console.log("DATA", _data);
        setData(_data);
    }

    

    return (
        <div>
            <div className="text-primary py-3 text-center">{title}</div>
            <div className="text-left" style={{color: '#308d45', fontSize: 14}}><BsDot/> Energy</div>
            <div className="text-left text-primary" style={{fontSize: 14}}><BsDot/> Pleasantness</div>
            {data.length > 0 && (
                <LineChart
                    width={300}
                    height={200}
                    data={data}
                    margin={{ top: 5, right: 48, left: 10, bottom: 5 }}
                >
                    <XAxis dataKey="label" />
                    <Tooltip />
                    {/* <CartesianGrid stroke="#f5f5f5" /> */}
                    <Line type="monotone" dataKey="pleasantness" stroke={theme === 'theme--light' ? '#004288' : '#cb6d56'} yAxisId={0} />
                    <Line type="monotone" dataKey="energy" stroke="#308d45" yAxisId={1} />
                </LineChart>
            )}
        </div>
    )
}

export default AnnualMood;