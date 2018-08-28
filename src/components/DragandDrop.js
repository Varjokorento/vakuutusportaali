import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import axios from 'axios';

class DragandDrop extends Component {

  state = {
    vakuutukset: [
            {name: "Lapsivakuutus",
            category: "Henkilövakuutukset",
            bgcolor: "white",
            price: this.fetchPrice()},

            {name: "Tapaturma- ja sairausvakuutus",
            category: "Henkilövakuutukset",
            bgcolor: "white",
            price: this.fetchPrice(this.category)},

            {name: "Vauvavakuutus",
            category: "Henkilövakuutukset",
            bgcolor: "white",
            price: 6},

            {name: "Henkivakuutus",
            category: "Henkilövakuutukset",
            bgcolor: "white"},

            {name: "Matkavakuutus",
            category: "Henkilövakuutukset",
            bgcolor: "white"},

            {name: "Henkilöauto",
            category: "Ajoneuvovakuutukset",
            bgcolor: "white"},

            {name: "Pakettiauto",
            category: "Ajoneuvovakuutukset",
            bgcolor: "white"},

            {name: "Moottoripyörä",
            category: "Ajoneuvovakuutukset",
            bgcolor: "white"},

            {name: "Mopo, Mönkijä, Traktori, Moottorikelkka",
            category: "Ajoneuvovakuutukset",
            bgcolor: "white"},

            {name: "Matkailuauto",
            category: "Ajoneuvovakuutukset",
            bgcolor: "white"},

            {name: "Matkailuvaunu",
            category: "Ajoneuvovakuutukset",
            bgcolor: "white"},

            {name: "Perävaunu",
            category: "Ajoneuvovakuutukset",
            bgcolor: "white"},

            {name: "Vene",
            category: "Ajoneuvovakuutukset",
            bgcolor: "white"},

            {name: "Kuorma-auto",
            category: "Ajoneuvovakuutukset",
            bgcolor: "white"},

            {name: "Kerros- ja rivitalo",
            category: "Kotivakuutukset",
            bgcolor: "white"},
            
            {name: "Omakotitalo",
            category: "Kotivakuutukset",
            bgcolor: "white"},

            {name: "Paritalo",
            category: "Kotivakuutukset",
            bgcolor: "white"},

            {name: "Mökki",
            category: "Kotivakuutukset",
            bgcolor: "white"},

            {name: "Sijoitusasunto",
            category: "Kotivakuutukset",
            bgcolor: "white"},

            {name: "Koira",
            category: "Eläimet",
            bgcolor: "white"},

            {name: "Kissa",
            category: "Eläimet",
            bgcolor: "white"},

            {name: "Hevonen",
            category: "Eläimet",
            bgcolor: "white"},

    ],
    price: 0}

    fetchPrice(category) {
      console.log(category);
      return 5;
    }

    onDragOver = (e) => {
      e.preventDefault();
    }

    onDragStart = (e, id) => {
      e.dataTransfer.setData("id", id);
    }

    onDrop = (ev, cat) => {       
      let id = ev.dataTransfer.getData("id");
      let vakuutukset = this.state.vakuutukset.filter((task) => {
          if (task.name == id) {
                   task.category = cat;
                   this.state.price += task.price;           
          }              
           return task;       
       });        
       this.setState({           
          ...this.state,           
          vakuutukset       
       });    
    }

  render() {

    var vakuutukset = {
      Henkilövakuutukset: [],
      Ajoneuvovakuutukset: [],
      Kotivakuutukset: [],
      Eläimet: [],
      valitut: []
    }

    this.state.vakuutukset.forEach((t) => {
      
      vakuutukset[t.category].push(
      <div key={t.name}
      onDragStart={(e) => this.onDragStart(e, t.name)}
      draggable
      className="draggable" style={{backgroundColor: t.bgcolor}}>
        {t.name}
        </div>
        );
    });
    
    //TODO: Korjaa post-pyyntö. Nyt se ei lähde mihinkään.
    //Seuraava funktio katsoo, mitkä ovat valitut ja sen jälkeen lähettää tiedot palvelimelle.
    //Palvelinkutsu ei vielä toimi, mutta se nyt on vain viilauskysymys (lähettää nyt muutenkin ihan dummy-apiin tietoa)
    const sendChosenInsurancestoTheServer = (req) => {
      var insurancesToBeCalculated = [];
      for (var i = 0; i < vakuutukset.valitut.length; i++) {
        insurancesToBeCalculated.push(vakuutukset.valitut[i].key)
      }
      console.log(insurancesToBeCalculated);
      var data =JSON.stringify(insurancesToBeCalculated);
      console.log(data);
      axios.post('http://localhost:4000/calculator', {
      body: data
      }).then((res) => {console.log(res)});
      /*
      fetch('http://localhost:4000/calculator', {
        method: 'post',
        body: data
      }).then(function(response) {
        return response;
      });
      */
    }
    let priceData;
    if (this.state.price > 0 && this.state.price < 14) {
        priceData =  <h1> Arvioitu hinta: {this.state.price} </h1>
    } else if (this.state.price > 14 ) {
      let originalPrice = this.state.price;
      this.state.price = this.state.price * 0.75;
      let discount = originalPrice - this.state.price;
      priceData =  <h1> Arvioitu hinta: {this.state.price} SAIT MEGA-ALENNUKSEN ARVOLTAAN: {discount} </h1>
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
      <Button bsClass="insurance_button" onClick={sendChosenInsurancestoTheServer.bind(this)}> Submit </Button>
      {vakuutukset.valitut}
      </div>
      
      <Col xs={12} sm={4}>
      <div className="insurance_category" onDragOver={(e) => this.onDragOver(e)}
      onDrop={(e) => {this.onDrop(e, "Henkilövakuutukset")}}>
      <h3>Henkilövakuutukset</h3>
      {vakuutukset.Henkilövakuutukset}
      </div>
      </Col>

      <Col xs={12} sm={4}>
      <div className="insurance_category" onDragOver={(e) => this.onDragOver(e)}
      onDrop={(e) => {this.onDrop(e, "Ajoneuvovakuutukset")}}>
      <h3>Ajoneuvovakuutukset</h3>
      {vakuutukset.Ajoneuvovakuutukset}
      </div>
      </Col>

      <Col xs={12} sm={4}>
      <div className="insurance_category" onDragOver={(e) => this.onDragOver(e)}
      onDrop={(e) => {this.onDrop(e, "Kotivakuutukset")}}>
      <h3>Kotivakuutukset</h3>
      {vakuutukset.Kotivakuutukset}
      </div>
      </Col>
      </Row>

      <Row className="show-grid cards text-center">
      <Col xs={12} sm={4}>
      <div className="insurance_category" onDragOver={(e) => this.onDragOver(e)}
      onDrop={(e) => {this.onDrop(e, "Eläimet")}}>
      <h3>Eläinvakuutus</h3>
      {vakuutukset.Eläimet}
      </div>
      </Col>
      </Row>

      </Grid>
      </div>
    );
  }
}

export default DragandDrop;
