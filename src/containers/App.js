import React, { Component } from 'react';

import Output from '../components/output'
import ButtonsPanel from '../components/buttons-panel'

const style = {
    margin: 'auto',
    display: 'grid',
    gridGap: '0.5em',
    height: '40em',
    width: '25em',
    justifyItems: 'stretch',
    fontWeight: 'bold',
    fontFamily: 'arial'
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            argument: 0,
            result: 0,
            operation: (a, b) => b
        }
    }

    numberPressHandle = (number) => {
        this.setState(prevState => {
            const argument = prevState.argument ? prevState.argument * 10 + +number : +number
            return { argument }
        })
    }
    operationPressHandle = (operation) => {
        this.setState(prevState => {
            if (prevState.argument) {
                const result = prevState.operation(prevState.result, prevState.argument)
                return {
                    argument: 0,
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
                argument: 0,
                result: result,
                operation: (a, b) => b
            }
        })
    }
    erasePressHandle = () => {
        this.setState({
            argument: 0,
            result: 0,
            operation: (a, b) => b
        })
    }

    buttonPressHandle = (buttonValue) => {
        if (Number.isInteger(+buttonValue)) {
            this.numberPressHandle(buttonValue)
        } else switch (buttonValue) {
            case '÷':
                const divisiton = (a, b) => a / b
                this.operationPressHandle(divisiton)
                break
            case 'x':
                const multiplication = (a, b) => a * b
                this.operationPressHandle(multiplication)
                break
            case '-':
                const subtraction = (a, b) => a - b
                this.operationPressHandle(subtraction)
                break
            case '+':
                const addition = (a, b) => a + b
                this.operationPressHandle(addition)
                break
            case 'c':
                this.erasePressHandle()
                break
            case '=':
                this.equalPressHandle()
                break
        }
    }

    render() {
        return (
            <div className="container" style={style}>
                <Output result={this.state.argument ? this.state.argument : this.state.result} />
                <ButtonsPanel buttonClick={this.buttonPressHandle} />
            </div>
        );
    }
}

export default App;
