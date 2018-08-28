import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import DragandDrop from './DragandDrop';

class MyInsurance extends Component {

    render() {
        return (
            <div>
                <Grid fluid className="splash">
                    <Row className="show-grid text-center information">
                        <Col xs={12} sm={12}>
                          < DragandDrop /> 
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default MyInsurance