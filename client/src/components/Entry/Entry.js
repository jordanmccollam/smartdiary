import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';
import { Card, Button } from '../index';
import { BsChevronDown, BsChevronUp, BsClock, BsTrash, BsPencilSquare } from 'react-icons/bs';

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
          {expanded ? (
            <div><BsChevronUp className="entry-header-icon" onClick={toggleExpand} /></div>
          ) : (
            <>
              <div className="entry-collapsed-content">{props.children}</div>
              <div><BsChevronDown className="entry-header-icon" onClick={toggleExpand} /></div>
            </>
          )}
        </div>
        
        {expanded && (
          <>
            <div className="entry-expanded-content">
              {props.children}
            </div>

            <div className="entry-actions">
              {props.edit && (
                <Button kind="ghost" onClick={props.edit} ><> Edit <BsPencilSquare /> </></Button>
              )}
              {props.delete && (
                <Button kind="ghost" onClick={props.delete} ><> Delete <BsTrash /> </></Button>
              )}
            </div>
          </>
        )}
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
  time: PropTypes.string,
  edit: PropTypes.func,
  delete: PropTypes.func
}

Entry.defaultProps = {
  className: "",
  time: "0:00am",
  children: "Entry Content Here"
}

export default Entry;


