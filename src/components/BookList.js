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
        // 
        const shelves = {
            currentlyReading: ['Currently Reading', 'currentlyReading'],
            wantToRead: ['Want to Read', 'wantToRead'],
            read: ['Read', 'read'],
        }

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {Object.keys(shelves).map((shelf) => 
                        <BookShelf
                            key={shelf}
                            shelfName={shelves[shelf][0]}
                            books={ books.filter(book => book.shelf === shelves[shelf][1]) }
                            onBookMove={ onBookMove }
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default BookList;
