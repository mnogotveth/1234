import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />

                <Container>
                    <h2 className="text-center m-4">Направления</h2>
                    <CardDeck>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://banner2.cleanpng.com/20180614/isk/kisspng-user-interface-design-figma-computer-software-user-5b224260d0f4c6.1554433815289718728559.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Дизайн</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet censeturey adiplising elit
                                    Volupes frugiat dicta.
                                </Card.Text>
                                <Button variant="primary">Подробнее</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://yt3.ggpht.com/a/AATXAJydWagmxDUi7J9bngbzQRJOs6n3JwpG2cL25w=s900-c-k-c0xffffffff-no-rj-mo"
                            />
                            <Card.Body>
                                <Card.Title>Разработка</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet censeturey adiplising elit
                                    Volupes frugiat dicta.
                                </Card.Text>
                                <Button variant="primary">Подробнее</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg"
                            />
                            <Card.Body>
                                <Card.Title>Аналитика</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet censeturey adiplising elit
                                    Volupes frugiat dicta.
                                </Card.Text>
                                <Button variant="primary">Подробнее</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
