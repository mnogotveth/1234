import React, { Component } from 'react'
import { Form, Button, Container} from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width:'500px'}}>
                <h1 className="text-center">Связаться</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Ваш Email</Form.Label>
                        <Form.Control type="email" placeholder="Введите Email"/>
                        <Form.Text>
                        Все права защищены 
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Введите сообщение</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Я не робот" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Отправить</Button>

                </Form>
            </Container>
        )
    }
}
