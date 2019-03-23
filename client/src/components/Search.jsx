import React, { Component } from 'react'


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null
    }
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

module.exports = Search;