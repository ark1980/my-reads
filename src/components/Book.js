import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Book = (props) => {
  return (
    <div className="Book">
      <h4>{props.book.title}</h4> 
      <p>{props.book.subtitle}</p> 
      {/* <FontAwesomeIcon icon={faCheckCircle} size="4x" /> */}
    </div>
  )
}

export default Book;

