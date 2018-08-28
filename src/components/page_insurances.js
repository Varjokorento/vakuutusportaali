import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';
import axios from 'axios';
import InsuranceInformation from './InsuranceInformation';

class InsuranceIndex extends Component {

    state = {
        arrayofInsurance : ["testi"],
        insuranceToBeDisplayed : []
    }

    componentDidMount() {
        axios.get("http://localhost:4000/insurancetypes")
        .then( res => {
            const newArrayofInsurance = res.data;
            this.setState({arrayofInsurance: newArrayofInsurance}, function () {
                console.log(this.state.arrayofInsurance);
            });
        })
    }

 
    onSelect(e) {
        let selectedInsurance;
    
        for(let i= 0; i < this.state.arrayofInsurance.length; i++) {
            if(this.state.arrayofInsurance[i].name == e) {
                selectedInsurance = this.state.arrayofInsurance[i]
            }
        }
        this.setState({insuranceToBeDisplayed: selectedInsurance}, () => {
            console.log(this.state.insuranceToBeDisplayed)
        })
    }
/*
    onSelect() {
        let selectedInsurance = target.get.value;
        selectedInsurance = arrayofInsurance.selectedInsurance;
        this.setState({selectedInsurance})
    }
*/
    
    render() {
        let insuranceData;
        if(this.state.insuranceToBeDisplayed.length != 0) {
            insuranceData = <InsuranceInformation selectedInformation = {this.state.insuranceToBeDisplayed}/>
        } else  {
            insuranceData = <p></p>
        }

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
                        <MenuItem  onSelect= {this.onSelect.bind(this)} eventKey="Henkilöauto">Henkilöauto</MenuItem>
                        <MenuItem onSelect= {this.onSelect.bind(this)} eventKey="Pakettiauto">Pakettiauto</MenuItem>
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
                    <Row>
                       {insuranceData}
                    </Row>
                </Grid>
         
            </div>
        ); 
    }

}

export default InsuranceIndex