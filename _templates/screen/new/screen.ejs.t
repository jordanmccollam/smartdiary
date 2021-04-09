---
to: client/src/screens/<%= name %>/<%= name %>.js
unless_exists: true
---
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from '../../components';

const logger = "<%= name %>:: ";

const <%= name %> = (props) => {
  let classes = {
		[`<%= h.changeCase.paramCase(name) %>`]: true,
    [`<%= h.changeCase.paramCase(name) %>-darkMode`]: props.darkMode,
	};

  return (
    <div className={classnames(classes)}>
    
    </div>
  )
}

<%= name %>.propTypes = {
  darkMode: PropTypes.bool
}

<%= name %>.defaultProps = {
  darkMode: false
}

export default <%= name %>;


