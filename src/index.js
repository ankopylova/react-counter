import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
    }

    increaseValue = () => {
        this.setState({counter: ++this.state.counter})
    }

    decreaseValue = () => {
        this.setState({counter: --this.state.counter})
    }

    render() {
        const {counter} = this.state;
        return (
            <div className='count'>
                <p>{counter}</p>
                <button onClick={this.decreaseValue} className={'minus'}>-</button>
                <button onClick={this.increaseValue} className={'plus'}>+</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
);