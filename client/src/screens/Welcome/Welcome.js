import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Button } from '../../components';

const logger = "Welcome:: ";

const Welcome = (props) => {
  let classes = {
		[`welcome`]: true,
    [`welcome-darkMode`]: props.darkMode,
	};

  return (
    <Container className={classnames(classes)}>
      <Row className="full center">
        <Col lg={6}>
          <Card darkMode={props.darkMode} className="text-center py-5">
            <>
              <h1>Smart Diary</h1>

              <div className="mt-3 mx-5">
                <Button darkMode={props.darkMode} full className="py-3" >Sign In</Button>
              </div>
            </>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

Welcome.propTypes = {
  darkMode: PropTypes.bool
}

Welcome.defaultProps = {
  darkMode: false
}

export default Welcome;


