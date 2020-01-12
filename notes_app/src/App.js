import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import NotesGrid from './components/NotesGrid'
import axios from 'axios'
// import { render } from '@testing-library/react';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  getNotes = () => {
    axios.get('http://localhost:8080/users/2')
      .then(function (response) {
        // handle success
        // this.setState({
        //     userData: response
        //   })
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <NotesGrid />
        {this.getNotes()}
        {/* {console.log(this.state)} */}
      </div>
    )
  }
}

