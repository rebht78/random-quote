import React from 'react';
import './Quote.styles.css';
class Quote extends React.Component
{
    render() {
        return (
            <div id="quote-box">
                <div id="text">
                “{this.props.text}”
                </div>
                <div id="author">
                - {this.props.author}
                </div>
                <div id="btndiv">
                    <button id="new-quote" onClick={this.props.generateQuote}>New Quote</button>
                </div>
            </div>
        )
    }
}

export default Quote;