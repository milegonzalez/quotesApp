import React from 'react'
import styles from './styles.jsx'

const AllQuotes = (props) => {
  let quotes = props;
  console.log('these are props', quotes[0].QUOTE)

  return (
    <div>
      <h1 style={styles.h1}>All saved Excerpts </h1>
      <ul>
        {Object.keys(quotes).map((quote, index) => (
          <li key={index}>
            <i style={styles.body}>{quotes[index].QUOTE}</i>
            <b style={styles.author}> - {quotes[index].AUTHOR} </b>
          </li>
        ))}
      </ul>
    </div>
  )
}




module.exports = AllQuotes;
