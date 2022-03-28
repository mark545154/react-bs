import React, { useState } from 'react';
import {Navbar, Nav, Button, Container, Modal, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import Breadcrumbs from "./Breadcrumbs";


const Styles = styled.div`
  a, .navbar-brand, .navbar-nav, .nav-link {
    color: #2BA7CE;
    text-decoration: none;

    &:hover {
      color: #f50000;
    }
  }
`

export default function Navibar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"}>
                    <Container>
                        <Navbar.Brand><Link to={"/"}>Логотип</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
                        <Navbar.Collapse id={"responsive-navbar-nav"}>
                            <Nav className={"mr-auto"}>
                                <Nav.Link><Link to={"/"}>Домой</Link></Nav.Link>
                                <Nav.Link><Link to={"/users"}>Пользователи</Link></Nav.Link>
                                <Nav.Link><Link to={"/about"}>О нас</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant={"info"} className={"mr-3"} onClick={handleShow}>Войти</Button>
                                <Button variant={"warning"} onClick={handleShow}>Выход</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container>
                    <Breadcrumbs />
                </Container>

            </Styles>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Войти</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId={"formBasicEmail"}>
                            <Form.Label>Ваш email</Form.Label>
                            <Form.Control type={"email"} placeholder={"Введите Ваш email"} />
                            <Form.Text className={"text-muted"}>Мы не передаём информацию третьим лицам.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId={"formBasicPassword"}>
                            <Form.Label>Ваш пароль</Form.Label>
                            <Form.Control type={"password"} placeholder={"Введите Ваш пароль"} />
                        </Form.Group>
                        <Form.Group controlId={"formBasicCheckbox"}>
                            <Form.Check type={"checkbox"} label={"Прочти меня"} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
