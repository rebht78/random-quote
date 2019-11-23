import React from 'react';
import './Quote.styles.css';
class Quote extends React.Component
{
    render() {
        return (
            <div id="quote-box">
                <div id="text">
                “I trust that age doth not wither nor custom stale my infinite variety.”
                </div>
                <div id="author">
                - Sherlock Holmes
                </div>
            </div>
        )
    }
}

export default Quote;