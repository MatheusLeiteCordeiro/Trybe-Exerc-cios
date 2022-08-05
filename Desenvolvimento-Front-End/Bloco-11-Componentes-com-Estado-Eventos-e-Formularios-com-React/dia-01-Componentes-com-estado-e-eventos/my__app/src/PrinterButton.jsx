import React from "react";

class PrinterButton extends React.Component {
    constructor() {
        super()

        this.state = {
            numeroDeClicks: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.setState(({ numeroDeClicks }) => ({
            numeroDeClicks: numeroDeClicks + 1,
        }), () => {
            const { numeroDeClicks } = this.state;
             console.log(this.getButtonColor(numeroDeClicks));
             console.log(numeroDeClicks);
        });
    };

    getButtonColor(num) {        
        return num % 2 === 0 ? 'green' : 'white'
    };

    render() {
        const { numeroDeClicks } = this.state;
        return (
            <button style={{ backgroundColor: this.getButtonColor(numeroDeClicks) }} onClick={ this.handleClick}>{numeroDeClicks}</button>
        );
    }
}

export default PrinterButton;
