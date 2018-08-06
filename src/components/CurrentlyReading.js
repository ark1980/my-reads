import React, { Component } from 'react';
import Book from './Book';

class CurrentlyReading extends Component {
	render() {
		return (
			<div className="BookShelf">
				<div className="BookshelfTitleBar">
					<div className="BookshelfTitle">
						<i className="fas fa-book-reader fa-2x" />
						<h3>Currently Reading</h3>
					</div>
				</div>
				<div className="BookList">
				{this.props.books.map(book => (
					book.shelf === "currentlyReading" &&
					<Book
						book={book}
						key={book.id}
						updateShelfStatus={this.props.updateShelfStatus}
					/>
				))}
				</div>
			</div>
		);
	}
}

export default CurrentlyReading;
