import React from 'react';
import './Quote.styles.css';
class Quote extends React.Component {
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
                <div id="tweet-quote">
                    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/intent/tweet">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Quote;