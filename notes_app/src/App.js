import React, { Component } from 'react'
import './App.css'
import NotesPage from './components/NotesPage'
import Login from './components/Login'
import { fetchNotes } from './actions/getNotes'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
// import { render } from '@testing-library/react';

class App extends Component {

  componentWillMount() {
    this.props.fetchNotes(2)
  }

  render() {

    const PrivateRoute = () => {
      console.log(this.props.user.user);
      
      return !this.props.user.loggedIn ? <Redirect to='/login' /> : <Redirect to='/notes' />
      // return this.props.user !== null ? <Route exact path='/notes' component={NotesGrid} /> : <Redirect to='/login' />
    }

    return (
      <div className="App">
        <div>
          <Route exact path='/login' component={Login} />
          <Route exact path='/notes' component={NotesPage} />
          <PrivateRoute path='/' />
        </div>
      </div>
    )
  }
}
App.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { fetchNotes })(App)