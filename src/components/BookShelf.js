import React, {Component} from 'react';
import Book from './Book'
import PropTypes from 'prop-types';

class BookShelf extends Component {
    static propTypes = {
        onBookMove: PropTypes.func.isRequired,
        shelfName: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
    }

    render() {
        // Destructuring 
        const { shelfName, books, onBookMove } = this.props

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <Book 
                                key={book.id}
                                onBookMove={onBookMove}
                                book={book}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;