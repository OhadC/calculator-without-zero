import React, { Component } from 'react';

import Output from './core/output'
import ButtonsPanel from './core/buttons-panel'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            argument: null,
            result: 0,
            operation: (a, b) => a + b
        }
    }

    numberPressHandle = (number) => {
        this.setState(prevState => {
            const argument = prevState.argument ? prevState.argument * 10 + number : number
            return { argument }
        })
    }
    operationPressHandle = (operation) => {
        this.setState(prevState => {
            if (prevState.argument) {
                const result = prevState.operation(prevState.result, prevState.argument)
                return {
                    argument: null,
                    result,
                    operation
                }
            } else {
                return { operation }
            }
        })
    }
    equalPressHandle = () => {
        this.setState(prevState => {
            const result = prevState.operation(prevState.result, prevState.argument)
            return {
                argument: null,
                result: result,
                operation: prevState.operation
            }
        })
    }
    erasePressHandle = () => {
        this.setState({
            argument: null,
            result: 0,
            operation: (a, b) => a + b
        })
    }

    render() {
        return (
            <div className="container">
                <Output result={this.state.argument ? this.state.argument : this.state.result} />
                <ButtonsPanel
                    numberPressHandle={this.numberPressHandle}
                    operationPressHandle={this.operationPressHandle}
                    equalPressHandle={this.equalPressHandle}
                    erasePressHandle={this.erasePressHandle} />
            </div>
        );
    }
}

export default App;
