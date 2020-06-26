import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import About from './About.json'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        // backgroundColor: 'red',
        marginTop:'60px',
      },
      [theme.breakpoints.up('md')]: {
        // backgroundColor: 'green',
        marginTop:'90px',
      },
      [theme.breakpoints.up('lg')]: {
        // backgroundColor: 'yellow',
        marginTop:'90px',
      },
    },
    
  
    team:{
      flexGrow: 1,
      padding: '15px',
      justify: 'space-between',
    },
    avatar: {
      backgroundColor: red[500],
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      borderRadius:'10px'
    },
    avatarCard: {
    justify: 'space-around',
    alignItems:'center',
    padding: '5px',
    backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
    // backgroundColor: 'lightGrey',
    borderRadius: '17px',
    border: '9px solid white',
    // boxShadow: '0 17px 15px 0 rgba(0,0,0,0.2)'
    }
  

  }));

export default function Aboutus(){
    const classes = useStyles();
        return(
          <>
          <Grid className={classes.root} container style={{padding:'10px', height:'10%',minHeight: '91.5vh'}}>
            <Grid item >
              <Typography align='left' color='primary' variant='h5'>
                Who we are ?
              </Typography>
              <Typography align='left' color='secondary' variant='subtitle2'>
                We are a group of professional who teach code.
                we have a group of highly experienced professionals
              </Typography>
            </Grid>



            <Grid item >
              <Typography align='left' color='primary' variant='h5'>
                Who we are ?
              </Typography>
              <Typography align='left' color='secondary' variant='subtitle2'>
                We are a group of professional who teach code.
                we have a group of highly experienced professionals
              </Typography>
            </Grid>



            <Grid item >
              <Typography align='left' color='primary' variant='h5'>
                Who we are ?
              </Typography>
              <Typography align='left' color='secondary' variant='subtitle2'>
                We are a group of professional who teach code.
                we have a group of highly experienced professionals
              </Typography>
            </Grid>



            <Grid item >
              <Typography align='left' color='primary' variant='h5'>
                Who we are ?
              </Typography>
              <Typography align='left' color='secondary' variant='subtitle2'>
                We are a group of professional who teach code.
                we have a group of highly experienced professionals
              </Typography>
            </Grid>



            <Grid item >
              <Typography align='left' color='primary' variant='h5'>
                Who we are ?
              </Typography>
              <Typography align='left' color='secondary' variant='subtitle2'>
                We are a group of professional who teach code.
                we have a group of highly experienced professionals
              </Typography>
            </Grid>



            <Grid item >
              <Typography align='left' color='primary' variant='h5'>
                Who we are ?
              </Typography>
              <Typography align='left' color='secondary' variant='subtitle2'>
                We are a group of professional who teach code.
                we have a group of highly experienced professionals
              </Typography>
            </Grid>



            <Grid item >
              <Typography align='left' color='primary' variant='h5'>
                Who we are ?
              </Typography>
              <Typography align='left' color='secondary' variant='subtitle2'>
                We are a group of professional who teach code.
                we have a group of highly experienced professionals
              </Typography>
            </Grid>


            <Grid item >
              <Typography align='left' color='primary' variant='h5'>
                Who we are ?
              </Typography>
              <Typography align='left' color='secondary' variant='subtitle2'>
                We are a group of professional who teach code.
                we have a group of highly experienced professionals
              </Typography>
            </Grid>



            <Grid item >
              <Typography align='left' color='primary' variant='h5'>
                Who we are ?
              </Typography>
              <Typography align='left' color='secondary' variant='subtitle2'>
                We are a group of professional who teach code.
                we have a group of highly experienced professionals
              </Typography>
            </Grid>



            <Grid item >
              <Typography align='left' color='primary' variant='h5'>
                Who we are ?
              </Typography>
              <Typography align='left' color='secondary' variant='subtitle2'>
                We are a group of professional who teach code.
                we have a group of highly experienced professionals
              </Typography>
            </Grid>
          </Grid>

          <Grid container className={classes.team} >
            {
              About.map((a,i)=>{
                return(
                  <Grid item xs={12} sm={6} md={3} lg={3} className={classes.avatarCard}>
                  <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {a.avatarShortName}
                    </Avatar>
                  
                  }
                  title={a.teamMemberName}
                  subheader={a.joinedDate}
                />
                <CardMedia 
                  className={classes.media}
                  title="CAPSCODE Team Member"
                  image={require(`${a.teamMemberImage}`)}
                />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {a.desc}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
                </Grid>
                )
              })
            }
            </Grid>
        </>
        )
}