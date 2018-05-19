import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI';
import BookList from './components/BookList';
import { Link, Route } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((response) => {   
      this.setState(() => ({
        books: response
      }))
    })
  }

  moveBook = (appBook, shelf) => {
      BooksAPI.update(appBook, shelf).then((response) => {
        appBook.shelf = shelf
        const tmpList = this.state.books.filter((book) => book.id != appBook.id )
        tmpList.push(appBook)
        this.setState(() =>({
          books: tmpList
        }))
      })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
              <div>
                <BookList
                  books={this.state.books}
                  onBookMove={this.moveBook}/>

                <div className="open-search">
                      <Link to='/search'>Add a book</Link>
                </div>
              </div>
              )}/>

        <Route
          exact path='/search'
          render={() => (
            <SearchBooks
              books={this.state.books}
              onBookMove={this.moveBook}/>
          )}
          />
      </div>
    )
  }
}

export default BooksApp
