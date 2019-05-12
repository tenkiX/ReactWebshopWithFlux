
import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import zsolt from '../../images/zsolt.jpg';
import judit from '../../images/judit.jpg';
import shutterlogo from '../../images/windows.jpg';
class Home extends Component {

    render() {


        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={shutterlogo}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={judit}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={zsolt}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

    );
    }
}
export default Home;