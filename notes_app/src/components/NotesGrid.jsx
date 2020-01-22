import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Paper, Modal } from '@material-ui/core';
import Note from './Note'

// const useStyles = makeStyles(theme => ({
const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    // gridGap: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign: 'left !important',
    marginTop: '1%',
  },
  paper: {
    margin: '.5em',
    textAlign: 'center',
    width: '280px',
    // color: theme.palette.text.secondary,
    // marginBottom: theme.spacing(1),
    display: 'flex',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  modalPaper: {
    // position: 'absolute',
    width: 400,
    height: 400,
    backgroundColor: '#ffffa3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'rgba(1,1,1,0)',
    border: 'none',
    width: 350,
    height: '100%',
    fontSize: '1rem',
    outline: 'none',
    resize: 'none',
    paddingLeft: 35,
  },
  inputTitle: {
    margin: '1%',
    backgroundColor: 'rgba(1,1,1,0)',
    border: 'none',
    fontSize: '2rem',
    outline: 'none',
    resize: 'none',
  }
}
// ))

class NotesGrid extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      notesArray: props,
      classes: props.classes,
      isOpen: false,
      selectedNote: {}
    }
  }
  
  render() {
    
    const classes = this.state.classes
    
    const handleOpen = (note) => {
      this.setState({ isOpen: true, selectedNote: note })
    }

    const handleClose = () => {
      this.setState({ isOpen: false })
    }

    const handleChangeTitle = (textChanged) => {
      this.setState({ selectedNote: textChanged })
    }

    const notesDisplay = this.state.notesArray.notesArray.map(note => {
      return <div value={note.note_id} onClick={() => handleOpen(note)} style={{ gridColumnEnd: 'span 3' }}>
        <Paper className={classes.paper}>
          <Note noteTitle={note.title}
            noteText={note.content}
          />
        </Paper>
      </div>
    })

    return (
      <div>
        <div className={classes.container}>
          {notesDisplay}
          <div onClick={handleOpen} style={{ gridColumnEnd: 'span 3' }}>
            <Paper className={classes.paper}>
              <Note noteTitle={`note.title`}
                noteText={`nodldkfsdaf ldfsd khdfj dsfkjsdhf sdfkjs dfkdsdfkhskdf  sh  hfsdfksdhf kste.content`}
              />
            </Paper>
          </div>
          <div onClick={handleOpen} style={{ gridColumnEnd: 'span 3' }}>
            <Paper className={classes.paper}>
              <Note noteTitle={`note.title`}
                noteText={`dsfddslfksdjfjsdlfj dllsdkjsldkjfsldfjsldkjfsldjkfsldjfsldjkflsdjfksldkjfsldkjfsldkjfslkdjfk f;dslkf sdf sdfj f sd fsdhf sfsdha fsd fdfiwhen  dskchdirfksdjfksdfasd sf`}
              />
            </Paper>
          </div>
          <Modal
            className={classes.modal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.isOpen}
            onClose={handleClose}
          >
            <div className={classes.modalPaper}>
              {/* <h2 id="simple-modal-title">Text in a modal</h2> */}
              <input className={classes.inputTitle} onChange={handleChangeTitle} placeholder='Note title' value={this.state.selectedNote.title}  />
              {/* <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p> */}
              <textarea className={classes.input} value={this.state.selectedNote.content} />
            </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(NotesGrid)