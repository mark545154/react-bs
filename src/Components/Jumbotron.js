import React from "react";
import { Container } from "react-bootstrap";
import ocean from "../Image/ocean.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background: url(${ocean}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    margin-top: 70px;
    margin-bottom: 70px;
    height: 400px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  
  .title__jumbo {
    padding-top: 50px;
  }
`

const Jumbotron = () => (
    <Styles>
        <div fluid className={"jumbo"}>
            <div className={"overlay"}> </div>
            <Container>
                    <h2 className="title__jumbo display-3">Jumbotron</h2>
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
    </Styles>
)

export default Jumbotron;