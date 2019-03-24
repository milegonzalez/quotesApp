import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Save from './components/Save.jsx'
import Search from './components/Search.jsx'
import AllQuotes from './components/allQuotes.jsx'
import styles from './components/styles.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allExcerpts: [
        {
          AUTHOR: 'Michael Scott',
          QUOTE: 'You miss 100% of the shots you don\'t take. -Wayne Gretzky'
        },
        {
          AUTHOR: 'Pocha',
          QUOTE: 'Decisiones, todos los dias...'
        }
      ],
      showQuotes: false
    }

    this.randomlyPullQuote = this.randomlyPullQuote.bind(this)
  }

  componentDidMount() {
    fetch("/quotesApp")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ allExcerpts: result })
        }
      )
  }

  randomlyPullQuote() {
    let quotes = this.state.allExcerpts
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }


    setTimeout(function(){
      //change setout time (3000) to the function of alertRange.
      let alertRange =  getRandomArbitrary(3000, 7000)
      let number = getRandomInt(quotes.length - 1)
      alert(quotes[number].QUOTE, quotes[number].AUTHOR)
    }, 3000)
  }


  render() {
    return (
      <div className="QuoteApp">
        <Save />
        <AllQuotes {...this.state.allExcerpts} />
        <div>{this.randomlyPullQuote()}</div>
      </div>

    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
