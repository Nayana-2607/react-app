import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { image1, image2, image3 } from '../assets/index.js';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption>
              <h3 className="font-link">First slide label</h3>
              <p className="font-link">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />

            <Carousel.Caption>
              <h3 className="font-link">Second slide label</h3>
              <p className="font-link">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />

            <Carousel.Caption>
              <h3 className="font-link">Third slide label</h3>
              <p className="font-link">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Header;
