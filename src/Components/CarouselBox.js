import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../Assets/1.jpg';
import bforestImg from '../Assets/2.jpg';
import aforestImg from '../Assets/3.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forestImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bforestImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aforestImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
