import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book'
class SearchBooks extends Component {
    state = {
        query: '',
        searchResult: [],
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query
        }))
        this.searchBook(query)
    }

    searchBook(query) {
        if(query) {
            BooksAPI.search(query).then((response) => {
                if(response.error) {
                    this.setState({searchResult: []})
                } else {
                    this.setState(() => ({
                        searchResult: response
                    }))
                }
            })
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
                    onChange={(e) => this.updateQuery(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                    {this.state.searchResult && this.state.searchResult.map(book => (
                        <Book 
                            key={book.id}
                            onBookMove={this.props.onBookMove}
                            book={book}/>
                    ))}
              </ol>
            </div>
            {JSON.stringify(this.state.query)}
            {console.log(this.state.searchResult)}
          </div>
        )
    }
}

export default SearchBooks;