import React, { Component } from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap';


export default class InsuranceInformation extends Component {
  state = {
    insurancetobedisplayed: []
  }

  onSelect

  render() {
    return (
      <div>
         <Grid fluid>
                    <Row className="show-grid information">
                        <Col xs={12} sm={2}></Col>
                        <Col xs={12} sm={8} className="userprofile">
                         <Panel id="collapsible-panel-example-2" defaultExpanded>
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        Vakuutus OTSIKKO
                                </Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                    <p>MAINOS TEKSTI</p>
                                </Panel.Body>
                                </Panel.Collapse>
                            </Panel>

                            <Panel id="collapsible-panel-example-2">
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                       Ehdot 
                                </Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        Tutustu ehtoihin!
                                </Panel.Body>
                                </Panel.Collapse>
                            </Panel>
                        </Col>
                        <Col xs={12} sm={2}></Col>
                    </Row>
                </Grid>
      </div>
    )
  }
}
