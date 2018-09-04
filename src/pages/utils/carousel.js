import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'

class HomeCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className="slide">
                    <img src={require('../../img/1.jpeg')} />
                    <p className="legend">Legend 1</p>
                </div>
                <div className="slide">
                    <img src={require('../../img/2.jpeg')} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="slide">
                    <img src={require('../../img/3.jpeg')} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
export default HomeCarousel
