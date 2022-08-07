import React from "react";

class Motivo extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return (
            <input type="text"  name="motivo" value={value} onChange={handleChange}>
            </input>
        )
    }
}

export default Motivo;
