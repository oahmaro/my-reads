import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
    const bookCover = {
        width: 128,
        height: 193,
        backgroundImage: `url(${props.book.imageLinks.thumbnail})`
    }
    return (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={bookCover}></div>
                <div className="book-shelf-changer">
                    <select 
                        defaultValue={props.book.shelf}
                        onChange={(e) => props.onBookMove(props.book, e.target.value)}>

                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors}</div>
            </div>        
        </li>
    )
}

Book.propTypes = {
    onBookMove: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
}

export default Book;

