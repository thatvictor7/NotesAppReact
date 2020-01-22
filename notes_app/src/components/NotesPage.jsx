import React, {Component} from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import NotesGrid from './NotesGrid'
import PropTypes from 'prop-types'
import { fetchNotes } from '../actions/getNotes'

let test = [
    {
        "note_id": 11,
        "user_id": 2,
        "title": "note 11",
        "content": "Et nam utamur atomorum laboramus, purto salutatus comprehensam vix eu",
        "created": "2018-01-20T07:00:00.000Z",
        "last_modified": "2019-11-29T07:00:00.000Z",
        "color": "orange"
    },
    {
        "note_id": 3,
        "user_id": 2,
        "title": "note 3",
        "content": " Aliquando honestatis eloquentiam ea est. Ne magna assueverit pro.",
        "created": "2016-09-29T06:00:00.000Z",
        "last_modified": "2019-11-27T07:00:00.000Z",
        "color": "blue"
    },
    {
        "note_id": 6,
        "user_id": 2,
        "title": "note 6",
        "content": "Eu mel impetus graecis recteque, et est summo detracto philosophia.",
        "created": "2013-06-29T06:00:00.000Z",
        "last_modified": "2019-11-24T07:00:00.000Z",
        "color": "blue"
    }
]

class NotesPage extends Component {

    componentWillMount(){
        this.props.fetchNotes(this.props.userId)
    }

    render(){
        return(
            <div>
                <Navbar />
                {/* <NotesGrid notesArray={this.props.notes} /> */}
                <NotesGrid notesArray={test} />
            </div>
        )
    }
}

NotesPage.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  notes: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  userId: state.user.userId,
  notes: state.user.notes
})

export default connect(mapStateToProps, {fetchNotes})(NotesPage)
// export default NotesPage