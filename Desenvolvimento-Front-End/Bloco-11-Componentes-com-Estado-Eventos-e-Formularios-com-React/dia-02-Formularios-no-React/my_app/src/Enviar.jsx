import React from "react";

class Enviar extends React.Component {
    render() {
         return (
            <button onClick={this.props.handleSubmit} disabled={this.props.isDisable} type="button">Enviar</button>
         )
    }
}

export default Enviar;