import React from 'react';

import './Counter.css';

export default class Counter extends React.Component {
   
    
    static defaultProps = {
        text: 'How old are you?'
    }

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter +1
        });
    }
        
    render() {
        const { text } = this.props;   
        return (
            <div>
                <div>{ text }</div>
                <div>{this.state.counter}</div>
                <button onClick={this.increment}>Click</button>
            </div>
        )
    }
}