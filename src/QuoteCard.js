import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './QuoteCard.css';


class QuoteCard extends React.Component{

    state = {
        twitterUrl: "",
        quote:"",
        author: "",
    }

    componentDidMount(){
        this.getQuote();
    }

   getQuote(){
        axios
            .get("https://api.quotable.io/random")
            .then(response => {
                console.log(response)
                const quote = response.data.content
                const author = response.data.author
                const url = `https://twitter.com/intent/tweet?text="${encodeURIComponent(quote + "\" - " + author)}`
                this.setState({
                    quote,
                    author,
                    twitterUrl: url,
                });
            }) 
            .catch(error => {console.log(error)});
    }

    render(){
    return(
        <div id="quote-box">
            <div class="text">
            <span id="text" class="quote-text">{this.state.quote}</span>
            </div>
            <div class="quote-author"><span>- </span>  
                <span id="author" class="quote-author">{this.state.author}</span>
            </div>
            <div class="buttons">
            <a id="tweet-quote" target="_top" href={this.state.twitterUrl}><FontAwesomeIcon class="icon" icon={["fab", "x-twitter"]} /></a>
            <button id="new-quote" class="button" onClick={this.getQuote.bind(this)}>Get a quote</button>
            </div>
        </div>
    )};
}
export default QuoteCard;