import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/Header.jsx';
const root= document.querySelector('#root')

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'msn':'Aplication Example!'}
    }
    render() { 
        return (
            <React.Fragment>
                <h1>React {this.state.msn}</h1>
                <Header />
            </React.Fragment>
            
          );
    }
}
 
ReactDOM.render(
<App />,
root
)