import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';

import './_button.scss';

const logger = "Button:: ";

const Button = (props) => {
  let classes = {
		[`button`]: true,
    [`button-${props.kind}`]: true,
    [`button-full`]: props.full,
    [`button-darkMode`]: props.darkMode,
    [`button-darkMode-${props.kind}`]: props.darkMode
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
    
      {props.children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  className: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'ghost', 'faded']),
  onClick: PropTypes.func,
  full: PropTypes.bool,
  darkMode: PropTypes.bool
}

Button.defaultProps = {
  className: "",
  children: "Default Button",
  kind: "primary",
  onClick: () => console.log(logger + 'onClick'),
  full: false, 
  darkMode: false
}

export default Button;


