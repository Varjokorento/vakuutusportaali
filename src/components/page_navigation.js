import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, MenuItem, NavDropdown, NavItem, Grid} from 'react-bootstrap';

class PageNavigation extends Component {
    render() {
        return (

            <Navbar fluid collapseOnSelect className="nav_custom">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Vakuutusprojekti</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Etusivu
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/vakuutukset" to="/vakuutukset">
                            Vakuutukset
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/" to="/omavakuutus">
                            Oma sivu
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/" to="/kirjaudu">
                            Kirjaudu sisään
                        </NavItem><NavItem eventKey={5} componentClass={Link} href="/" to="/rekisteroidy">
                            Rekisteröidy
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default PageNavigation