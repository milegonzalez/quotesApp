import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Save from './components/Save.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      olderData: []
    }
  }

  componentDidMount() {
    fetch("/quotesApp")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ olderData: result })
        }
      ).then(
        console.log('result,', this.state.olderData)
      )
  }

  render() {
    let quotes = this.state.olderData;
    console.log(quotes)
    return (
      <div className="QuoteApp">
        <Save />
        <div>
          <h1>All saved quotes </h1>
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>
             {quote.QUOTE}
             <br />
             <b> {quote.AUTHOR} </b>
            </li>
          ))}
        </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));