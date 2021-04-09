import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';
import { Card } from '../index';
import { BsChevronDown, BsChevronUp, BsClock } from 'react-icons/bs';

import './_entry.scss';

const logger = "Entry:: ";

const Entry = (props) => {
  const [ expanded, setExpanded ] = useState(false);
  let classes = {
		[`entry`]: true,
		[`entry-expanded`]: expanded,
	};

  const toggleExpand = () => {
    setExpanded(!expanded);
  }

  return (
    <Card className={`${props.className} ${classnames(classes)}`}>
      <>
        <div className="entry-header">
          <div className="d-flex align-items-center">{props.time}<BsClock className="ml-1" /></div>
          {/* {!expanded && <div className="entry-collapsed-content">{props.children}</div>} */}
          {expanded ? (
            <div><BsChevronUp className="entry-header-icon" onClick={toggleExpand} /></div>
          ) : (
            <>
              <div className="entry-collapsed-content">{props.children}</div>
              <div><BsChevronDown className="entry-header-icon" onClick={toggleExpand} /></div>
            </>
          )}
        </div>
        
        {expanded && props.children}
      </>
    </Card>
  )
}

Entry.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  className: PropTypes.string,
  time: PropTypes.string
}

Entry.defaultProps = {
  className: "",
  time: "0:00am",
  children: "Entry Content Here"
}

export default Entry;


