import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Orders from './components/Orders';
import Worker from './components/pages/Worker';
import Manager from './components/pages/Manager';
import './App.css';
import AddOrder from "./components/AddOrder";
import ManagerStatistics from "./components/ManagerStatistics";
import Home from "./components/pages/Home";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <Home/>
                            </React.Fragment>
                        )} />

                        <Route path="/customerOrder" render={props => (
                            <React.Fragment>
                                <AddOrder/>
                            </React.Fragment>
                        )} />
                        <Route path="/customerOrderList" render={props => (
                            <React.Fragment>
                                <Orders/>
                            </React.Fragment>
                        )} />
                        <Route path="/worker" render={props => (
                            <React.Fragment>
                                <Worker/>
                            </React.Fragment>
                        )} />
                        <Route path="/managerStatistics" render={props => (
                            <React.Fragment>
                                <ManagerStatistics/>
                            </React.Fragment>
                        )} />
                        <Route path="/manager" render={props => (
                            <React.Fragment>
                                <Manager/>
                            </React.Fragment>
                        )} />

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;