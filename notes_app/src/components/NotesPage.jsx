import React, {Component} from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import NotesGrid from './NotesGrid'
import PropTypes from 'prop-types'
import { fetchNotes } from '../actions/getNotes'

class NotesPage extends Component {

    componentWillMount(){
        this.props.fetchNotes(this.props.userId)
    }

    render(){
        return(
            <div>
                <Navbar />
                <NotesGrid notesArray={this.props.notes} />
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