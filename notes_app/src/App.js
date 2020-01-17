import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NotesPage from './components/NotesPage'
import Login from './components/Login'
import { fetchNotes } from './actions/getNotes'
import { Route, Redirect } from 'react-router-dom'
import './App.css'

class App extends Component {

  // componentWillMount() {
  //   // this.props.fetchNotes(2)
  //   return this.props.user.user ? this.props.fetchNotes(this.props.user.user.data.User.user_id) : null
  // }

  render() {

    const PrivateRoute = () => {
      console.log(this.props.user, '______1')
      return !this.props.user.loggedIn ? <Redirect to='/login' /> : <Redirect to='/notes' />
    }

    return (
      <div className="App">
        <div>
          <Route exact path='/login' component={Login} />
          <Route exact path='/notes' component={NotesPage} />
          <PrivateRoute path='/' />
          {/* <NotesPage /> */}
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