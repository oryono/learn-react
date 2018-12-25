import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Counters from './components/counters'

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

    handleReset= () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };

    handleIncrement = counter => {
        const counters  = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters})
    }

    render() {
        return (
            <div>
                <NavBar
                    totalCounters={this.state.counters.filter(c => c.value > 0).length}
                />
                <Counters
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onReset={this.handleReset}
                    counters={this.state.counters}
                />

            </div>
        );
    }
}

export default App;
