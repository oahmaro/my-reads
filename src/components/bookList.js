import React, {Component} from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookMove: PropTypes.func.isRequired,
    }
    
    render() {
        // Destructuring 
        const { onBookMove, books } = this.props

        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead = books.filter(book => book.shelf ==='wantToRead');
        const read = books.filter(book => book.shelf ==='read');

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf 
                            onBookMove={onBookMove}
                            shelfName="Currently Reading"
                            books={currentlyReading}/>

                        <BookShelf 
                            onBookMove={onBookMove}
                            shelfName="Want to Read"
                            books={wantToRead}/>

                        <BookShelf 
                            onBookMove={onBookMove}
                            shelfName="Read"
                            books={read}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookList;