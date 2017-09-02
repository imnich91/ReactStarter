import React from 'react';
import {Carousel} from 'react-bootstrap';

const MyCarousel = (props) => (
  <Carousel className = "carousel">
    <Carousel.Item>
      <img width={900} height={450} alt="900x450" src={props.FirstPicture}/>
      <Carousel.Caption>
        <h3>{props.FirstPictureCaption}</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={450} alt="900x450" src={props.SecondPicture}/>
      <Carousel.Caption>
        <h3>{props.SecondPictureCaption}</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x450" src={props.ThirdPicture}/>
      <Carousel.Caption>
        <h3>{props.ThirdPictureCaption}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default MyCarousel;
