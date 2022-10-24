import React from 'react';
import Header from './header/header';
import SearchBox from "./searchbox/searchbox";
import ResultContainer from "./result_container/result-container";
import './app.css';

const nombres = require('@rstacruz/startup-name-generator');



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerExpanded: true,
            headerText: 'Name it!',
            suggestedNames: []
        }
    }

    handleInputChange = (inputText) => {
        this.setState({ headerExpanded: !(inputText), suggestedNames: inputText ? nombres(inputText) : [] });
    }
    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange} />
                < ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>

        );
    }


}

export default App;