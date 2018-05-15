import React, { Component } from 'react';

import Output from './core/output'
import ButtonsPanel from './core/buttons-panel'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            operation: null
        }
    }


    render() {
        return (
            <div className="container">
                <Output result={this.state.result} />
                <ButtonsPanel />

            </div>
        );
    }
}

export default App;
