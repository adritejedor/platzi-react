import React, { Component } from 'react';

class Statefull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello = 'hola mundo'
        }
    }
    render() {
        return (
            <h1>{this.state.hello}</h1>
        )
    }
}

export default Statefull;