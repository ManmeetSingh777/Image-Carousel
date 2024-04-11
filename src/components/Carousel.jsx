import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    render() {
        return (
            <div>
                <div className="bg" style={{backgroundImage : `url(${images[this.state.index].img})`}}>
                    <div className="left" onClick={() => {this.state.index > 0 && this.setState({index:this.state.index-1})}}>
                        <ArrowBackIosIcon />
                    </div>
                    <div className="titles">
                        <h1 className="title">{images[this.state.index].title}</h1>
                        <h1 className="sub">{images[this.state.index].subtitle}</h1>
                    </div>
                    <div className="right" onClick={() => {this.state.index < 2 && this.setState({index:this.state.index+1})}}>
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
