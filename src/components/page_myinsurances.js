import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import axios from 'axios';

class MyInsurance extends Component {

    state = {
        profile: ""
    }

    componentWillMount() {
        this.fetchProfileInformation();
        console.log(this.state.profile.profilesinsurances);
    }

    fetchProfileInformation() {
            axios.get("http://localhost:4000/profiili/current")
            .then(res => {
                let profile = res.data
                this.setState ({ profile: profile}, function () {
                    console.log(this.state.profile)})})};
               
    

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
                                    <p>{this.state.profile.email}</p>
                                    <p>{this.state.profile.name}</p>
                                    <p>{this.state.profile.phone}</p>
                                </Panel.Body>
                                </Panel.Collapse>
                            </Panel>

                            <Panel id="collapsible-panel-example-2">
                                <Panel.Heading>
                                    <Panel.Title toggle>       
                                <p>Vakuutukset</p> 
                                </Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
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