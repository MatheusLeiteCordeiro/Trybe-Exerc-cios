import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fakeFetchSolutionsId } from '../fake-fetch';

export default class SolutionItem extends Component {
    constructor() {
        super()

        this.state = {
            exercises: []
        };
    }

    async componentDidMount() {
        const { match: { params: { algumaCoisa } } } = this.props;
        const response = await fakeFetchSolutionsId(algumaCoisa);
        const data = await response.json();
        
        this.setState({ exercises: data.exercises })
    }

    render() {
        const { match: { params: { algumaCoisa } } } = this.props;
        const { exercises } = this.state;
        return (
            <div>
                <h1>Item do Gabarito: {algumaCoisa}</h1>
                <ul>
                    {
                        exercises.map(exercice => <li key={exercice}>{exercice}</li>)
                    }
                </ul>

               <Link to="/solutions"><button type='button'>Voltar para gabarito</button></Link> 
            </div>
        )
    }
}