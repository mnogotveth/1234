import React, { Component } from 'react'
import { Container, Media, Col, Row, ListGroup,Card } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://pbs.twimg.com/media/EJMFTLWXYAU-kYU.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                 </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://pbs.twimg.com/media/EJMFTLWXYAU-kYU.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                 </p>
                            </Media.Body>

                        </Media>
                        <Media className="m-5">
                            <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://pbs.twimg.com/media/EJMFTLWXYAU-kYU.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                 </p>
                            </Media.Body>

                        </Media>
                        <Media className="m-5">
                            <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://pbs.twimg.com/media/EJMFTLWXYAU-kYU.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                 </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Категории</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Виджет</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
