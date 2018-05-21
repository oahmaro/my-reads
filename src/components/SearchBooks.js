import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookMove: PropTypes.func.isRequired,
    }

    state = {
        query: '',
        searchResult: [],
        error: false,
    }

    // update fetched books based on query
    updateQuery = (query) => {
        this.setState(() => ({
            query
        }))

        // call method that fetch the books passing it the query
        this.searchBook(query)
    }

    searchBook(query) {
        // check if query isn't empty
        if(query) {
            BooksAPI.search(query).then((response) => {

                // fixed a problem that happens when query doesn't match the predefined search terms
                if(response.error) {
                    this.setState({
                        searchResult: [],
                        error: true,
                    });

                } else {
                    this.setState(() => (
                         this.setBookShelf(response)
                    ));
                }
            })
        } else {
            this.setState(() => ({
                searchResult: [],
                error: false,
            }))
        }
    }

    setBookShelf(books) {
        const appBooks = this.props.books;
        // books is the passed book array passed from the search query
        const searchedBooks = books;
         
        // this will hold the new book lists returned from the map after setting the shelf on it
        const newBooks = searchedBooks.map(searchedBook => {
            const match = appBooks.find(appBook => appBook.id === searchedBook.id)
            if (match) {
                searchedBook.shelf = match.shelf
            } else {
                searchedBook.shelf = 'none';
            }

            return searchedBook
        })
        return {
            searchResult: newBooks,
            error: false,
        }
    }


    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={this.state.query}
                    // update the updateQuery method based on the query entered in search input field
                    onChange={(e) => this.updateQuery(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                    {   // check if Search Result has books in it
                        this.state.searchResult && !(this.state.error) ?
                         this.state.searchResult.map(book => (
                            <Book 
                                key={book.id}
                                onBookMove={this.props.onBookMove}
                                book={book}/>))
                        : <li>Books not found</li>}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks;