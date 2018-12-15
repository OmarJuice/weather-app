import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CenteredContainer from './Components/CenteredContainer';


class App extends Component {

    render() {
        return (
            <CenteredContainer>

            </CenteredContainer>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#root'))