import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { Fade } from "react-slideshow-image";

import './App.css';
const FIRST_IMG = require('./protect_bad.png');
const SECOND_IMG = require('./protect_good.png');

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row md={6}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ipsum magna, quis laoreet purus rhoncus at. Vestibulum laoreet odio a neque tristique pharetra. Phasellus cursus odio ut nibh porttitor faucibus. Sed vehicula magna ut libero rhoncus, vitae molestie erat venenatis. Nam ultrices urna a ligula bibendum porttitor. Quisque efficitur ornare turpis, ac tempus urna elementum et. Suspendisse eleifend blandit scelerisque. In dignissim nulla a fermentum fermentum.</p>
          </Row>
          <Row md={6}>
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
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
