import React, {Component} from 'react';
import BookShelf from './BookShelf'

class BookList extends Component {
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfName="Currently Reading"/>
                        <BookShelf shelfName="Want to Read"/>
                        <BookShelf shelfName="Read"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookList;