import React from 'react';
import { Carousel } from "react-bootstrap";
import ocean2 from '../Image/ocean2.jpg';
import ocean3 from '../Image/ocean3.jpg';
import styled from "styled-components";

const Styles = styled.div`
  img {
    min-width: 100%;
    height: 600px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`

export default function Slider() {

    return (
        <Styles>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className={"d-block w-100%"}
                        src={'https://source.unsplash.com/random'}
                        alt={"First slide"}
                    />
                    <Carousel.Caption>
                        <h3>Первый слайдер</h3>
                        <p>Небольшое описание к этому слайду.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={ocean2}
                        alt={"First slide"}
                    />

                    <Carousel.Caption>
                        <h3>Второй слайдер</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={ocean3}
                        alt={"First slide"}
                    />

                    <Carousel.Caption>
                        <h3>Заголовок третьего слайдера</h3>
                        <p>Небольшое описание данного слайдера.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Styles>
    );
}
