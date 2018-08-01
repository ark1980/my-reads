import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Book = () => {
  return (
    <div className="Book">
      <FontAwesomeIcon icon={faCheckCircle} size="4x" />
    </div>
  )
}

export default Book;

