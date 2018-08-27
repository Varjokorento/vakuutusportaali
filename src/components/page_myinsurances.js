import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

class MyInsurance extends Component {

    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Oma sivu</h2>
                    <p>Täällä näet omat vakuutuksesi ja voit muuttaa tietojasi</p>
                </Jumbotron>
            </Grid>
        );
    }

}

export default MyInsurance