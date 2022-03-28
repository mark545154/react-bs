import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Jumbotron from "../Components/Jumbotron";
import about from "../Image/about-bg.jpg";


export const About = () => (
    <>
        <Container style={{marginBottom: '30px', minHeight: '100vh'}}>
            <Row md={7}>
                <img src={about} height={500} alt={"image"}/>
            </Row>

            <Col style={{marginTop: '70px'}}>
                <h1 style={{textAlign: "center", marginBottom: '50px'}}>Информация о нас</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem esse ex facilis neque,
                    nostrum,
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
                    culpa distinctio ea eos non officia quaerat quod soluta. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Animi autem esse ex facilis neque, nostrum,
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem esse ex facilis neque,
                    nostrum,
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
                    culpa distinctio ea eos non officia quaerat quod soluta. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Animi autem esse ex facilis neque, nostrum,
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
            <div className="jumbotron">
                <Container>
                    <h2 className="display-3">Jumbotron</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem esse ex
                        facilis neque, nostrum,
                        omnis quia ratione rem, repudiandae sit voluptatum. Doloribus eveniet excepturi, ipsum labore
                        placeat
                        repellat saepe. Aperiam, blanditiis cum distinctio eaque iste minus quae reiciendis voluptatem.
                        Commodi
                        culpa distinctio ea eos non officia quaerat quod soluta. Aperiam, blanditiis cum distinctio
                        eaque
                        iste minus quae reiciendis voluptatem.</p>
                </Container>
            </div>
        </Container>
        <Jumbotron />
    </>
)