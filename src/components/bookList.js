import React, {Component} from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

class BookList extends Component {
    render() {
        const currentlyReading = this.props.books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead = this.props.books.filter(book => book.shelf ==='wantToRead');
        const read = this.props.books.filter(book => book.shelf ==='read');

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf 
                            onBookMove={this.props.onBookMove}
                            shelfName="Currently Reading"
                            books={currentlyReading}/>

                        <BookShelf 
                            onBookMove={this.props.onBookMove}
                            shelfName="Want to Read"
                            books={wantToRead}/>

                        <BookShelf 
                            onBookMove={this.props.onBookMove}
                            shelfName="Read"
                            books={read}/>
                    </div>
                </div>
            </div>
        )
    }
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
}

export default BookList;