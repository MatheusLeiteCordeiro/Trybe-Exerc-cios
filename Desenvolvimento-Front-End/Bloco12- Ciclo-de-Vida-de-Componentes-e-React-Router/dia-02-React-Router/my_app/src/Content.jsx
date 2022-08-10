import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import LiveLectures from "./pages/LiveLectures";
import SolutionItem from "./pages/SolutionItem";
import Solutions from './pages/Solutions';

export default class Content extends Component {
    render() {
        return (
            <main>
                Conteudo vai mudar:
                <Switch>
                    <Route exact path="/live-lectures" component={ LiveLectures } />
                    <Route exact path="/calendar" component={ Calendar } />
                    <Route exact path="/solutions" component={ Solutions } />
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/solutions/:algumaCoisa" component={ SolutionItem } />
                </Switch>
            </main>
        )
    }
}