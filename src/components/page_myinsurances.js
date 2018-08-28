import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

class MyInsurance extends Component {

    render() {
        return (
            <div>
                <Grid fluid className="splash">
                    <Row className="show-grid information">
                        <Col xs={12} sm={2}></Col>
                        <Col xs={12} sm={8} className="userprofile">

                         <Panel id="collapsible-panel-example-2" defaultExpanded>
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        Asiakastiedot
                                </Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                    <p>Nimi: Joonas Venäläinen</p>
                                    <p>Henkilötunnus: 141289-xxxx</p>
                                    <p>Puh: 0504063577</p>
                                </Panel.Body>
                                </Panel.Collapse>
                            </Panel>

                            <Panel id="collapsible-panel-example-2">
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        Vakuutukset
                                </Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        Tänne tulee vakuutukset
                                </Panel.Body>
                                </Panel.Collapse>
                            </Panel>

                            <Panel id="collapsible-panel-example-2">
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        Vahinkotapahumat
                                </Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        Tänne tulee vahinkotapahtumat
                                </Panel.Body>
                                </Panel.Collapse>
                            </Panel>

                            <Panel id="collapsible-panel-example-2">
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        Laskut
                                </Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        Tänne tulee laskut
                                </Panel.Body>
                                </Panel.Collapse>
                            </Panel>

                            <Panel id="collapsible-panel-example-2">
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        Viestit
                                </Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        Tänne tulee viestit
                                </Panel.Body>
                                </Panel.Collapse>
                            </Panel>

                        </Col>
                        <Col xs={12} sm={2}></Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default MyInsurance