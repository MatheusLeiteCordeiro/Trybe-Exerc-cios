import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fakeFetchSolutions } from '../fake-fetch';


export default class Solutions extends Component {
    constructor() {
        super()
        this.state = {
            solutions: []
        }
    }

    async componentDidMount() {
        const response = await fakeFetchSolutions();
        const data = await response.json();

        this.setState({ solutions: data.results })
    }

    render() {
        const { solutions } = this.state;
        return (
            <div>
                <h1>Gabarito</h1>
                <ul>
                    {
                        solutions.map(solution => <li key={solution.lecture} >
                            <Link to={`/solutions/${solution.lecture}`}>{solution.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}