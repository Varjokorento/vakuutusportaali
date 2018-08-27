import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';

class InsuranceIndex extends Component {

    render() {
        return (
            <div>
                <Grid fluid className="splash">
                    <Row className="show-grid text-center information">
                        <Col xs={12} sm={12}>
                        <h3>Valitse vakuutustyyppi</h3>
                        <DropdownButton
                                title="Ajoneuvovakuutukset"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Active Item</MenuItem>
                        </DropdownButton>

                        <DropdownButton
                                title="Kotivakuutukset"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Active Item</MenuItem>
                        </DropdownButton>

                        <DropdownButton
                                title="Henkilövakuutukset"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Active Item</MenuItem>
                        </DropdownButton>
                        </Col>

                        <DropdownButton
                                title="Nuorisovakuutus"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Active Item</MenuItem>
                        </DropdownButton>

                        <DropdownButton
                                title="Matkavakuutus"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Active Item</MenuItem>
                        </DropdownButton>

                        <DropdownButton
                                title="Eläinvakuutukset"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Active Item</MenuItem>
                        </DropdownButton>

                        <DropdownButton
                                title="Venevakuutus"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Active Item</MenuItem>
                        </DropdownButton>

                        <DropdownButton
                                title="Metsävakuutus"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Active Item</MenuItem>
                        </DropdownButton>
                    </Row>
                </Grid>
         
            </div>
        ); 
    }

}

export default InsuranceIndex