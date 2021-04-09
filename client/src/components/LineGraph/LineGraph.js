import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';
import {
  LineChart, XAxis, Tooltip, Line, CartesianGrid
} from 'recharts';
import moment from 'moment';
import { BsDot } from 'react-icons/bs';

import './_line-graph.scss';

const logger = "LineGraph:: ";

const LineGraph = (props) => {
  let classes = {
		[`line-graph`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="line-graph-title">{props.title}</div>

      <div className="line-graph-energy-key"><BsDot/> Energy</div>
      <div className="line-graph-pleasantness-key"><BsDot/> Pleasantness</div>

      <LineChart
          width={300}
          height={200}
          data={props.data.map(d => {
            const values = Object.values(d.keys);
            var obj = {label: d.label, amt: d.amt};
            values.forEach((value, i) => {
              obj[value.keyLabel] = value.keyValue;
            });
            return obj;
          })}
          margin={{ top: 5, right: 48, left: 10, bottom: 5 }}
      >
          <XAxis dataKey="label" />
          <Tooltip />
          {/* <CartesianGrid stroke="#f5f5f5" /> */}
          <Line type="monotone" dataKey="pleasantness" stroke={props.theme === 'theme--light' ? '#004288' : '#cb6d56'} yAxisId={0} />
          <Line type="monotone" dataKey="energy" stroke="#308d45" yAxisId={1} />
      </LineChart>
    </div>
  )
}

LineGraph.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.array,
  theme: PropTypes.string
}

LineGraph.defaultProps = {
  className: "",
  title: "Line Graph",
  data: [],
  theme: "theme--light"
}

export default LineGraph;


