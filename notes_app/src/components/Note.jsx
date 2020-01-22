import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    // minWidth: 275,
    // height: '100%',
    // margin: '0',
    height: 200,
    width: 252,
    textAlign: 'left',
    padding: '5% 5% 0',
    // paddingRight: '5%',
    backgroundColor: '#ffffa3',
    overflowWrap: 'break-word'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    // fontSize: 14,
    textAlign: 'left'
  },
  content: {
    // width: '200px',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    // color: 'red'
  },
});

function Note(props) {

  const { noteTitle, noteText } = props
  const classes = useStyles()

  return (
    <div className={classes.card}>
          <Typography className={classes.title} variant="h5" component="h2">
            {noteTitle}
        </Typography>
        {/* <Typography className={classes.content} variant="body2" component="div"> */}
           {/* {noteText} */}
         {/* </Typography> */}
         <p className={classes.content}>
           {noteText}
         </p>
    </div>
  )
}

export default Note