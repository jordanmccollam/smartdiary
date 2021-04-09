import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from '../../components';

const logger = "Diary:: ";

const Diary = (props) => {
  let classes = {
		[`diary`]: true,
    [`diary-darkMode`]: props.darkMode,
	};

  return (
    <Container fluid className={classnames(classes)}>
      <Row className="full">
        <Col lg={3} className={`${props.darkMode ? 'side-menu-darkMode' : ''} side-menu d-none d-xl-block`}>

        </Col>
      </Row>
    </Container>
  )
}

Diary.propTypes = {
  darkMode: PropTypes.bool
}

Diary.defaultProps = {
  darkMode: false
}

export default Diary;


