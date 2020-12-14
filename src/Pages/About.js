
import React, { Component } from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActivKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Librares</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://cdn-images-1.medium.com/max/720/1*1J0xfAvZdABQEDbK9vA_JQ.jpeg" />
                                    <p>
                                        loremfjgn nfgefj gn,fmng nmfg,mdg 
                                        sfgsghghsrhgsrghsrgh sfeg srgbrg 
                                        sfg sef gsgsefgsgg grh 
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://cdn-images-1.medium.com/max/720/1*1J0xfAvZdABQEDbK9vA_JQ.jpeg" />
                                    <p>
                                        loremfjgn nfgefj gn,fmng nmfg,mdg 
                                        sfgsghghsrhgsrghsrgh sfeg srgbrg 
                                        sfg sef gsgsefgsgg grh 
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="http://pgmcpskov.ru/media/thumbs/vacancy/2019/07/620030500px-team-1.jpg.0x1000_q85.jpg" />
                                    <p>
                                        loremfjgn nfgefj gn,fmng nmfg,mdg 
                                        sfgsghghsrhgsrghsrgh sfeg srgbrg 
                                        sfg sef gsgsefgsgg grh 
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="http://pgmcpskov.ru/media/thumbs/vacancy/2019/07/620030500px-team-1.jpg.0x1000_q85.jpg" />
                                    <p>
                                        loremfjgn nfgefj gn,fmng nmfg,mdg 
                                        sfgsghghsrhgsrghsrgh sfeg srgbrg 
                                        sfg sef gsgsefgsgg grh 
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="http://pgmcpskov.ru/media/thumbs/vacancy/2019/07/620030500px-team-1.jpg.0x1000_q85.jpg" />
                                    <p>
                                        loremfjgn nfgefj gn,fmng nmfg,mdg 
                                        sfgsghghsrhgsrghsrgh sfeg srgbrg 
                                        sfg sef gsgsefgsgg grh 
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
