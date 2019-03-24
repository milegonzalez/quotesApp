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
  }

  componentDidMount() {
    fetch("/quotesApp")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ allExcerpts: result })
        }
      ).then(
        console.log('result,', this.state.allExcerpts)
      )
  }

  render() {
    return (
      <div className="QuoteApp">
        <Save />
        <AllQuotes {...this.state.allExcerpts} />
        <button style={styles.button} onClick={this.randomlyPullQuote}>Generate Random Excerpt</button>
        <button style={styles.button} onClick={this.returnAllQuotes} >See your Excerpts</button>
      </div>

    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
