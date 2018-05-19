import React, {Component} from 'react';
import Book from './Book'
import PropTypes from 'prop-types';

class BookShelf extends Component {
    static propTypes = {
        onBookMove: PropTypes.func.isRequired,
        shelfName: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
    }
    static propTypes = {
        books: PropTypes.array.isRequired,
    }
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

export default BookShelf;