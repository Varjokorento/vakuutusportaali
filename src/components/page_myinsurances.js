import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';

class MyInsurance extends Component {

    render() {
        return (
            <div>
                <Grid fluid className="splash">
                    <Row className="show-grid text-center information">
                        <Col xs={12} sm={12}>
                          <h3>Tänne pääsee vaan admin!!</h3>  
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default MyInsurance