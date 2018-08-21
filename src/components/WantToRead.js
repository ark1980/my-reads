import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import Book from './Book'


class WnatToRead extends Component {
	
  render() {
    return(
      <div className="BookShelf">
				<div className="BookshelfTitleBar">
					<div className="BookshelfTitle">
            <FontAwesomeIcon icon={faBookOpen} size="2x"/>
						<h3>Want to Read</h3>
					</div>
				</div>
				<div className="BookList">
					{this.props.books.map(book => (
						book.shelf === "wantToRead" &&
						<Book
							book={book}
							key={book.id}
							shelf={book.shelf}
							updateShelfStatus={this.props.updateShelfStatus}
						/>
					))}
				</div>
			</div>
    )
  }
}

export default WnatToRead;