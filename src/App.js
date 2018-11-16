import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Fade } from "react-slideshow-image";

import './App.css';
const FIRST_IMG = require('./protect_bad.png');
const SECOND_IMG = require('./protect_good.png');

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
}

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ipsum magna, quis laoreet purus rhoncus at. Vestibulum laoreet odio a neque tristique pharetra. Phasellus cursus odio ut nibh porttitor faucibus. Sed vehicula magna ut libero rhoncus, vitae molestie erat venenatis. Nam ultrices urna a ligula bibendum porttitor. Quisque efficitur ornare turpis, ac tempus urna elementum et. Suspendisse eleifend blandit scelerisque. In dignissim nulla a fermentum fermentum.</p>
            </Col>
            <Col md={6}>
              <Fade {...properties}>
                <div className="each-fade">
                  <div className="image-container">
                    <img src={FIRST_IMG} />
                  </div>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img src={SECOND_IMG} />
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
