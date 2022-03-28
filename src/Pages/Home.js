import React from "react";
import Slider from "../Components/Slider";
import Jumbotron from "../Components/Jumbotron";
import {Card, Col, Container, Row, Button} from "react-bootstrap";
import ocean from '../Image/ocean.jpg';
import ocean3 from '../Image/ocean3.jpg';


export const Home = () => (
    <>
        <Slider/>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant={"top"} src={ocean}/>
                        <Card.Body>
                            <Card.Title>Карточка</Card.Title>
                            <Card.Text>
                                Краткое описание в карточке...
                            </Card.Text>
                            <Button variant={"warning"}>Подробнее...</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant={"top"} src={ocean}/>
                        <Card.Body>
                            <Card.Title>Карточка</Card.Title>
                            <Card.Text>
                                Краткое описание в карточке...
                            </Card.Text>
                            <Button variant={"warning"}>Подробнее...</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant={"top"} src={ocean}/>
                        <Card.Body>
                            <Card.Title>Карточка</Card.Title>
                            <Card.Text>
                                Краткое описание в карточке...
                            </Card.Text>
                            <Button variant={"warning"}>Подробнее...</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron />
        <Container style={{marginBottom: '30px', paddingBottom: '90px'}}>
            <Row>
                <Col md={7}>
                    <img src={ocean3} height={400}  alt={"image"}/>
                </Col>
                <Col md={5}>
                    <h2>Заголовок статьи</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem esse ex facilis neque, nostrum,
                        omnis quia ratione rem, repudiandae sit voluptatum. Doloribus eveniet excepturi, ipsum labore
                        placeat
                        repellat saepe. Aperiam, blanditiis cum distinctio eaque iste minus quae reiciendis voluptatem.
                        Commodi
                        culpa distinctio ea eos non officia quaerat quod soluta. Aperiam, blanditiis cum distinctio eaque
                        iste minus quae reiciendis voluptatem.
                        Commodi
                        culpa distinctio ea eos non officia quaerat quod soluta. Aperiam, blanditiis cum distinctio eaque
                        iste minus quae reiciendis voluptatem.
                        Commodi
                        culpa distinctio ea eos non officia quaerat quod soluta.
                    </p>
                </Col>
            </Row>
        </Container>
    </>
)