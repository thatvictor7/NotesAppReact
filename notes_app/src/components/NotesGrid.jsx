import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
// import Grid from '@material-ui/core/Grid';
import Note from './Note'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    // gridGap: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign: 'left !important',
    marginTop: '1%',
  },
  paper: {
    // padding: theme.spacing(1),
    // padding: '5em 2em',
    margin: '0 .5em',
    textAlign: 'center',
    width: '280px',
    // height: '280px',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),

    display: 'flex',
    // flexDirection: 'column',
    alignContent: 'flex-start',

    justifyContent: 'flex-start'
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      {/* <Divider className={classes.divider} /> */}
      {/* <Typography variant="subtitle1" gutterBottom>
        CSS Grid Layout:
      </Typography> */}
        <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>
              <Note />
          </Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>
            <Note />
          </Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>
            <Note />
          </Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>
            <Note />
          </Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>
            <Note />
          </Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>
            <Note />
          </Paper>
        </div>
      </div>
    </div>
  );
}