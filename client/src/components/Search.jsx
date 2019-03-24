import React, { Component } from 'react'
import styles from './styles.jsx'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(query) {
    $.ajax({
      method: "GET",
      url: "/quotesApp",
      data: data
    })
      .done(function (data) {
        alert("Data Saved: " + data);
      });
  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }


  render() {
    return (
      <div>
        <h1>Search: </h1>
        <form onSubmit={this.handleSubmit} >
          <label>Author:
        <br />
            <input type="text" name="Author" value={this.state.query}
              onChange={this.handleChange} />
          </label>
          <br />
          <br />
          <label>
            Keyword:
          <br />
            <textarea name="Quote" value={this.state.query} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Search;