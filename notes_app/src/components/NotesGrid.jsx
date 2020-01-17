import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
}
))

const NotesGrid = (props) => {

  const { notesArray } = props
  const classes = useStyles()
  const notesDisplay = notesArray.map(note => {
    console.log(note)
    
    return <div style={{ gridColumnEnd: 'span 3' }}>
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
      </div>
    </div>
  )
}

export default NotesGrid