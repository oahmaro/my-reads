import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
    const thumbnail = props.book.imageLinks !== undefined ? props.book.imageLinks.smallThumbnail : ''
    const bookCover = {
        width: 128,
        height: 193,
        backgroundImage: `url(${thumbnail})`,
        // fixed a repeat problem happening on thumbnail
        backgroundRepeat: 'round'
    }
    return (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={bookCover}></div>
                <div className="book-shelf-changer">
                    <select 
                        // sets the default value for book control
                        value={props.book.shelf}

                        // calls on moveBookMove method to move books to diffrent shelves
                        onChange={(e) => props.onBookMove(props.book, e.target.value)}>

                        <option disabled>Move to...</option>
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

