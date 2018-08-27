import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';

class InsuranceIndex extends Component {
    constructor() {
        super();
        this.state = {
            insurances: [],
        };
    }

    componentDidMount() {
        let initialInsurances = [];
        fetch('http://localhost:4000/insurancetypes')
            .then(response => {
                return response.json();
            }).then(insurance => {
                initialInsurances = insurance.results.map((insurance) => {
                    return insurance
                });
                console.log(initialInsurances);
                this.setState({
                    insurances: initialInsurances,
                });
            });
    }

    render() {
        return (
            <div>
                <Grid fluid className="splash">
                    <Row className="show-grid text-center information">

                        <h3>Valitse vakuutustyyppi</h3>
                        <DropdownButton
                                title={"Ajoneuvovakuutukset"}
                                key={"avain"}
                                className="insurance_selector"
                                id="vain"
                                >
                        <MenuItem eventKey="1">Henkilöauto</MenuItem>
                        <MenuItem eventKey="2">Pakettiauto</MenuItem>
                        <MenuItem eventKey="3">Moottoripyörä</MenuItem>
                        <MenuItem eventKey="4">Mopo</MenuItem>
                        <MenuItem eventKey="5">Matkailuauto</MenuItem>
                        <MenuItem eventKey="6">Matkailuvaunu</MenuItem>
                        <MenuItem eventKey="7">Moottorikelkka</MenuItem>
                        <MenuItem eventKey="8">Mönkijä</MenuItem>
                        <MenuItem eventKey="9">Perävaunu</MenuItem>
                        <MenuItem eventKey="10">Vene</MenuItem>
                        <MenuItem eventKey="11">Traktori</MenuItem>
                        <MenuItem eventKey="12">Kuorma-auto</MenuItem>
                        <MenuItem eventKey="13">Museoajoneuvo</MenuItem>
                        <MenuItem eventKey="14">Auton kuntoturva</MenuItem>
                        </DropdownButton>

                        <DropdownButton
                                title="Koti & omaisuus"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Kerrostalo</MenuItem>
                        <MenuItem eventKey="2">Rivitalo</MenuItem>
                        <MenuItem eventKey="3">Omakotitalo</MenuItem>
                        <MenuItem eventKey="4">Paritalo</MenuItem>
                        <MenuItem eventKey="5">Erillistalo</MenuItem>
                        <MenuItem eventKey="6">Mökki</MenuItem>
                        <MenuItem eventKey="7">Sijoitusasunto</MenuItem>
                        <MenuItem eventKey="8">Metsä</MenuItem>
                        <MenuItem eventKey="9">Vene</MenuItem>
                        </DropdownButton>

                        <DropdownButton
                                title="Matka"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Matkavakuutus</MenuItem>
                        </DropdownButton>
                        

                        <DropdownButton
                                title="Henkilöt"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Vauva(raskaus)</MenuItem>
                        <MenuItem eventKey="2">Lapsi(7 vrk - 14 v)</MenuItem>
                        <MenuItem eventKey="3">Aikuinen</MenuItem>
                        <MenuItem eventKey="4">Henkivakuutus</MenuItem>
                        <MenuItem eventKey="5">Urheiluvakuutus</MenuItem>
                        </DropdownButton>

                        <DropdownButton
                                title="Eläimet"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Koira</MenuItem>
                        <MenuItem eventKey="2">Kissa</MenuItem>
                        <MenuItem eventKey="3">Hevonen</MenuItem>
                        </DropdownButton>

                        <DropdownButton
                                title="Nuorisopaketti"
                                key={"avain"}
                                className="insurance_selector"
                                >
                        <MenuItem eventKey="1">Nuorisopaketti (18 - 28v)</MenuItem>
                        </DropdownButton>
                    </Row>
                </Grid>
         
            </div>
        ); 
    }

}

export default InsuranceIndex