import React, {Component} from 'react';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import axios from 'axios';

class DragandDrop extends Component {

    state = {
        price: 0,
        insurances: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/insurancetypes')
            .then(res => {
                let insurances = res.data;

                for (let i = 0; i < insurances.length; i++) {
                    insurances[i].category = insurances[i].insurancetype;
                    insurances[i].price = 3;
                }

                this.setState({insurances: insurances});
            });
    }

    onDragOver = (e) => {
        e.preventDefault();
    };

    onDragStart = (e, id) => {
        e.dataTransfer.setData("id", id);
    };

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        let vakuutukset = this.state.insurances.filter(task => {
            if (task.name == id) {
                task.category = cat;
                this.state.price += task.price;
            }
            return task;
        });
        this.setState({
            ...this.state,
            insurances: vakuutukset
        });
    };

    render() {
        let insObject = {valitut: []};
        let categories = [];

        this.state.insurances.forEach(insurance => {
            let field = insurance.category;
            console.log(field);

            if (!(field in insObject)) {
                insObject[field] = [];
                categories.push(field);
            }

            insObject[field].push(
                <div key={insurance.name}
                     onDragStart={(e) => this.onDragStart(e, insurance.name)}
                     draggable
                     className="draggable" style={{backgroundColor: "yellow"}}>
                    {insurance.name}
                </div>
            );
        });

        let categoriesToPage = categories.map(category => {
            return (
                <Col xs={12} sm={4}>
                    <div className="insurance_category" onDragOver={(e) => this.onDragOver(e)} onDrop={e => {
                        this.onDrop(e, category)
                    }}>
                        <h3>{category}</h3>
                        {insObject[category]}
                    </div>
                </Col>
            )
        });

        //TODO: Korjaa post-pyyntö. Nyt se ei lähde mihinkään.
        //Seuraava funktio katsoo, mitkä ovat valitut ja sen jälkeen lähettää tiedot palvelimelle.
        //Palvelinkutsu ei vielä toimi, mutta se nyt on vain viilauskysymys (lähettää nyt muutenkin ihan dummy-apiin tietoa)
        const sendChosenInsurancestoTheServer = (req) => {
            let insurancesToBeCalculated = [];
            for (let i = 0; i < insObject.valitut.length; i++) {
                insurancesToBeCalculated.push(insObject.valitut[i].key)
            }
            console.log(insurancesToBeCalculated);
            let data = JSON.stringify(insurancesToBeCalculated);
            console.log(data);
            axios.post('http://localhost:4000/calculator', {
                body: data
            }).then((res) => {
                console.log(res)
            });
            /*
            fetch('http://localhost:4000/calculator', {
              method: 'post',
              body: data
            }).then(function(response) {
              return response;
            });
            */
        };

        let priceData;
        if (this.state.price > 0 && this.state.price < 14) {
            priceData = <h1> Arvioitu hinta: {this.state.price} </h1>
        } else if (this.state.price > 14) {
            let originalPrice = this.state.price;
            this.state.price = this.state.price * 0.75;
            let discount = originalPrice - this.state.price;
            priceData = <h1> Arvioitu hinta: {this.state.price} SAIT MEGA-ALENNUKSEN ARVOLTAAN: {discount} </h1>
        } else {
            priceData = <p></p>
        }

        return (
            <div>
                <h1 className="header">Vakuutukset</h1>
                {priceData}
                <Grid fluid className="info_cards">
                    <Row className="show-grid cards text-center">
                        <div className="droppable" onDragOver={(e) => this.onDragOver(e)}
                             onDrop={(e) => this.onDrop(e, "valitut")}>
                            <h4>Pudota vakuutukset tähän</h4>
                            <Button bsClass="insurance_button"
                                    onClick={sendChosenInsurancestoTheServer.bind(this)}> Submit </Button>
                            {insObject.valitut}
                        </div>
                        {categoriesToPage}
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default DragandDrop;