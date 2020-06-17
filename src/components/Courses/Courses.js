import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CourseFile from './courses.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    margin:'20px'
  },
  paper: {
    marginTop: '60px',
    padding: '20px',
    width:'100%',
  },
  image: {
    // backgroundColor:'red', 
    width: '50%',
    height: '100%',
  },
  img: {
    // backgroundColor:'red',
    padding: '20px',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '100%',
    minHeight: '100%'
    
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
      CourseFile.map((c, i)=> {
        return(
        <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="course image" src={require(`${c.image}`)} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={6} md={9} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {c.courseName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
        <Typography variant="subtitle1">{c.coursePrice}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
        )
      })
      }
    </div>
  );
}
