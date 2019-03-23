import React, { Component } from 'react';
import $ from 'jquery';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quote: 'What are you interested in saving today',
      Author: 'Who said this?'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'Author') {
      this.setState({ Author: event.target.value });
    } else if (event.target.name === 'Quote') {
      this.setState({ Quote: event.target.value})
    }
  }

  handleSubmit(event) {
    console.log('this.state', this.state);
    event.preventDefault();
    let data = this.state;

    $.ajax({
      method: "POST",
      url: "/quotesApp",
      data: data
    })
      .done(function( data ) {
        alert( "Data Saved: " + data );
      });
  }


  render() {
    return (
      <div>
        <h1>Save your Quote!</h1>
        <form onSubmit={this.handleSubmit} >
          <label>Author:
          <br />
         <input type="text" name="Author" value={this.state.Author}
              onChange={this.handleChange} />
          </label>
          <br />
          <br />
          <label>
            Quote:
            <br />
        <textarea name="Quote" value={this.state.Quote} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default Search;