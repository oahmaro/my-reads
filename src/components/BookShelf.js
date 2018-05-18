import React, {Component} from 'react';
import Book from './Book'
import PropTypes from 'prop-types';

class BookShelf extends Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book => (
                            <Book 
                                key={book.id}
                                onBookMove={this.props.onBookMove}
                                book={book}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
}


export default BookShelf;