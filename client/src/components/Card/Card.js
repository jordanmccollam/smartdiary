import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';

import './_card.scss';

const logger = "Card:: ";

const Card = (props) => {
  let classes = {
		[`custom-card`]: true,
    [`custom-card-darkMode`]: props.darkMode
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      {props.children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  className: PropTypes.string,
  darkMode: PropTypes.bool
}

Card.defaultProps = {
  className: "",
  darkMode: false
}

export default Card;


