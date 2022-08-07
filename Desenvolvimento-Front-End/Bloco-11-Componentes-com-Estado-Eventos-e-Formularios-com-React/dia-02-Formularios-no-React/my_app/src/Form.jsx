import React from "react";
import VaiComparecer from "./VaiComparecer";
import Motivo from "./Motivo"
import Enviar from "./Enviar";

class Form extends React.Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            estadofavorito: '',
            motivo: '',
            vaiComparecer: false,
            formulariosComErros: false,
            isDisable: true,
            arraOfMotivos: []
        }
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({[name]: value}, () => {

            const buttonIsDisable = value.length === 0;
            const temErros = value.length > 10;

            this.setState({
                 isDisable: buttonIsDisable,
                 formulariosComErros: temErros
            })
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const { motivo, arraOfMotivos } = this.state;

        alert(`O motivo é ${motivo}`);

        this.setState({ arraOfMotivos: [...arraOfMotivos, motivo] });
    }

    render() {
        return (
            <div>
                <form>

                    <fieldset>

                    <legend>aaaaa</legend>

                    <VaiComparecer value={this.state.value} handleChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <Motivo value={this.state.value} handleChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <input type="checkbox" id="id" value={this.state.value} name="vaiComparecer" onChange={this.handleChange} />
                    <br></br>                        <br></br>
                    <input type="file"></input>

                    </fieldset>
                    <br></br>
                    <Enviar handleSubmit={this.handleSubmit} isDisable={this.state.isDisable}/>

                </form>
            </div>
        );
    }
}

export default Form;
