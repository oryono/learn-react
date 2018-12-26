import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Counters from './components/counters'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Register from './components/Register'
import Comments from './components/Comments'

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 3},
            {id: 4, value: 0},
        ]
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({counters})
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters})
    }

    render() {
        return (
            <Router>
                <div>
                    <NavBar
                        totalCounters={this.state.counters.filter(c => c.value > 0).length}
                    />


                    <Route
                        path="/"
                        exact
                        render = {() => <Counters
                            onDelete={this.handleDelete}
                            onReset={this.handleReset}
                            onIncrement={this.handleIncrement}
                            counters={this.state.counters}/>
                        }
                    />
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Register}/>
                    <Route path="/comments" exact component={Comments}/>
                </div>

            </Router>
        );
    }
}

export default App;
