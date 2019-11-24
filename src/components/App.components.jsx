import React from 'react';
import Quotes from '../data/Quotes';
import './App.styles.css';
import Quote from './Quote.components';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: Quotes[0]
        };
    }
    render() {
        return (
            <div>
                <Quote text={this.state.quote.text} author={this.state.quote.author} generateQuote={this.newQuote} />
                <footer id="text-footer">
                Crafted in Surat with <i className="fa fa-heart"></i> by Sohel Shaikh
                </footer>
            </div>
        )
    }
    newQuote = (e) => {
        const randomIndex = Math.floor(Math.random() * Quotes.length);
        this.setState({ quote: Quotes[randomIndex] });
    }
}

export default App;