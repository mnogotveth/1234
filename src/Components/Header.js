import React, { Component } from 'react'
import { FormControl, Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import logo from './logo192.png'
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Домашняя </Nav.Link>
                                <Nav.Link href="/about"> О нас </Nav.Link>
                                <Nav.Link href="/contacts"> Связаться </Nav.Link>
                                <Nav.Link href="/blog"> Блог </Nav.Link>
                            </Nav>
                            <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <BrowserRouter>
                        <Route  path="/" component={Home} exact />
                        <Route  path="/about" component={About} exact />
                        <Route  path="/contacts" component={Contacts} exact />
                        <Route  path="/blog" component={Blog} exact />
                </BrowserRouter>
            </>
        )
    }
}
