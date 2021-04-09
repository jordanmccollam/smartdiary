import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Button, LineGraph } from '../../components';
import { BsSun } from 'react-icons/bs';
import { RiMoonClearFill } from 'react-icons/ri';
import { AiOutlineLogout } from 'react-icons/ai';
import moment from 'moment';

import './_diary.scss'

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
          <h1 className="text-center">Smart Diary<br/><h5>Property of USER</h5></h1>

          <Button darkMode={props.darkMode} kind="faded" full ><>{props.darkMode ? (<RiMoonClearFill className="text-warning" size={40} />) : (<BsSun className="text-warning" size={40} />)}</></Button>
          <Button darkMode={props.darkMode} kind="faded" full ><LineGraph darkMode={props.darkMode} title={`${moment().format('YYYY')} Moods`} /></Button>
          <Button darkMode={props.darkMode} kind="faded" full className="py-2" ><>Sign Out <AiOutlineLogout size={25} /></></Button>
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


