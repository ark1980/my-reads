import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
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
					<Book />
					<Book />
					<Book />
					<Book />
				</div>
			</div>
		);
	}
}

export default CurrentlyReading;
