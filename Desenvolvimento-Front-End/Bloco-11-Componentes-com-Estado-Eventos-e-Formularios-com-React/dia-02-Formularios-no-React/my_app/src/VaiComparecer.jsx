import React from "react";

class VaiComparecer extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return (
            <select name="estadoFavorito" value={value} onChange={handleChange}>
                <option>PE</option>
                <option>MG</option>
                <option>SP</option>
                <option>SC</option>
            </select>
        )
    }
}

export default VaiComparecer;