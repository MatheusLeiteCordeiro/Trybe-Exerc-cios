import React from "react";

class Img extends React.Component {
    render() {
        return (
            <img src={this.props.source} alt={this.props.alternativeText}></img>
        );
    }
}

export default Img;