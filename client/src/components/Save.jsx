import React, { Component } from 'react';
import $ from 'jquery';
import styles from './styles.jsx'

class Save extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quote: '',
      Author: ''
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
        <h1 style={styles.h1}>Save your Excerpt!</h1>
        <form onSubmit={this.handleSubmit} >
          <label>
            <h2 style={styles.body}>Author:</h2>
         <input type="text" placeholder="Who said this?" name="Author" value={this.state.Author}
              onChange={this.handleChange} />
          </label>
          <br />
          <br />
          <label>
            <h2 style={styles.body}>Quote:</h2>
        <textarea style={styles.textArea} name="Quote" placeholder="What are you interested in saving today" value={this.state.Quote} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Save;