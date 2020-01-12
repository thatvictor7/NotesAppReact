import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    // minWidth: 275,
    // height: '100%',
    // margin: '0'
    height: 200,
    width: '100%',
    textAlign: 'left',
    paddingLeft: '5%',
    backgroundColor: '#ffffa3'
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
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    // <Card className={classes.card} variant="outlined">
    //   <CardContent>
    //     {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
    //       Word of the Day
    //     </Typography> */}
    //     <Typography variant="h5" component="h2">
    //       Header
    //     </Typography>
    //     {/* <Typography className={classes.pos} color="textSecondary">
    //       adjective
    //     </Typography> */}
    //     <Typography variant="body2" component="p">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   {/* <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions> */}
    // </Card>
    <div className={classes.card}>
          <Typography className={classes.title} variant="h5" component="h2">
            Title
        </Typography>
        <Typography variant="body2" component="p">
           well meaning and kindly.
         </Typography>
    </div>
  );
}