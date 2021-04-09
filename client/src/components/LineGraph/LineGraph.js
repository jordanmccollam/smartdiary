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

      {props.data[0]?.keys.map((key, i) => (
        <div className="line-graph-key" style={{color: props.theme === 'theme--light' ? key.lightColor : key.darkColor}}><BsDot/>{key.keyLabel}</div>
      ))}

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
          {props.data[0]?.keys.map((key, i) => (
            <Line type="monotone" dataKey={key.keyLabel} stroke={props.theme === 'theme--light' ? key.lightColor : key.darkColor} yAxisId={i} />
          ))}
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


