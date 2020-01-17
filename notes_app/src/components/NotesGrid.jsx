import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Modal, Fade, Backdrop } from '@material-ui/core';
import Note from './Note'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign: 'left !important',
    marginTop: '1%',
  },
  paper: {
    margin: '0 .5em',
    textAlign: 'center',
    width: '280px',
    color: theme.palette.text.secondary,
    // whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignContent: 'flex-start',
    justifyContent: 'flex-start'
  },
  divider: {
    margin: theme.spacing(2, 0),
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperTest: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}
))

const NotesGrid = (props) => {

  const { notesArray } = props
  
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const classes = useStyles()

  const popup = (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paperTest}>
          <h2 id="transition-modal-title">Transition modal</h2>
          <p id="transition-modal-description">react-transition-group animates me.</p>
        </div>
      </Fade>
    </Modal>
  )

  const notesDisplay = notesArray.map(note => {
    console.log(note)
    return <div style={{ gridColumnEnd: 'span 3' }}>
    {/* // return <div style={{ gridColumnEnd: 'span 3' }}> */}
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
              noteText={`dsfddslfksdjfjsdlfj dlk fksdjfksdfasd sf`}
            />
          </Paper>
        </div>
        {popup}
      </div>
    </div>
  )
}

export default NotesGrid