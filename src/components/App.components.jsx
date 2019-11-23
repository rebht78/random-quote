import React from 'react';
import Quotes from '../data/Quotes';
import Quote from './Quote.components';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            quote: Quotes[0]
        };
    }
    render() {
        return (
            <Quote text={this.state.quote.text} author={this.state.quote.author} generateQuote={this.newQuote}/>
        )
    }
    newQuote = (e) => {
        const randomIndex = Math.floor(Math.random() * Quotes.length);
        this.setState({quote:Quotes[randomIndex]});
    }
}

export default App;