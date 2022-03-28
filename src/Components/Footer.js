import React from "react";
import {Container} from "react-bootstrap";

const Footer = () => (
    <Container fluid style={{backgroundColor: '#212529', color: '#fff',flex: '0 0 auto',height: '80px'}}>
        <Container style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
            <p>Мой сайт на react-bootstrap</p>
            <p>Сайт разработан Mark Fominikh 2022 ©</p>
        </Container>
    </Container>
    )
export default Footer;