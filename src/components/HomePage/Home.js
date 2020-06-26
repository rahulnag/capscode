import React from 'react'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import upcoming from './Upcoming.json'
import { Card } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const theme = createMuiTheme();
const My_backgroundImage= 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);';
const device_width = window.innerWidth
theme.typography.p = {
  fontSize: '0.7rem',
  // color: 'pink',
  '@media (min-width:600px)': {
    fontSize: '0.7rem',
    // color:'red',
    
  },
  [theme.breakpoints.up('smDown')]: {
    fontSize: '0.9rem',
    
  },
};



class Home extends React.Component{
    render(){
      localStorage.setItem('currentTab', 0) //initializing to 0 so that we can be able to handle the tab highlighting navigation on page refresh or going to home page
      //if you have any doubt then comment this line and see the issue, issue will not be much just there is conflict between the higlighted tab and the rendered page
        return(
            // --div style={{display: 'flex', flexWrap: 'wrap', flexDirection:'row',padding:'20px', paddingTop:'30px'}}
        
        <div style={{backgroundImage:`${My_backgroundImage}`}}>
        
        <Grid container style={{paddingTop:'45px', height:'100%',minHeight: '95.5vh'}}>
            <Grid item sm={12} md={6} lg={6} style={{ width:'100%', paddingLeft:'30px',paddingRight:'30px'}}>
            <ThemeProvider theme={theme}>
                <Typography variant="p" style={{fontWeight:"fontWeightLight"}}>
                <h2 style={{paddingTop:'20px',}}>Hey Fox,</h2>
                <h2>If you are a coder you are in the right place...</h2>
                <h2>We write code and make you future ready</h2>
                <br/>
                <h2>Learn the language</h2>
                <h2>Make some small but complex project</h2>
                <h2>See someone experienced writing the codes and learn the another style of writing</h2>
                <h2>Again make some project, this time with better style and understanding...</h2>
                </Typography>
                
            </ThemeProvider>
            </Grid>
            
            <Grid item sm={12} md={6} lg={6} style={{padding:'50px',justifyContent:'flex-end'}}>
                <img style={{width:'89%', height:'100%', paddingLeft:'10px',paddingTop:'30px'}} src={require('./innovation_.png')} alt="capscode" />
            </Grid>
            <Typography variant="h6" style={{paddingLeft:'30px'}}><b>UPCOMING EVENTS!</b></Typography>
        </Grid>
            
        
        <Grid container justify="center" style={{height:'95%',minHeight: 'auto', minHeight:'40vh'}}>
            {
                upcoming.map((e,i) => {
                  return(
                    <Grid item xs={12} sm={6} lg={3} md={3} style={{padding:'10px'}}>
                    <Card style={{width:'auto', backgroundImage:`${e.cardColor}`, padding:'15px',borderRadius:'15px',boxShadow: '0 17px 15px 0 rgba(0,0,0,0.2)'}}>
                      <Typography varient='subtitle2'>{e.eventName}</Typography>
                      <Divider/>
                      <Typography style={{marginTop:'10px'}}>{`When: ${e.date_time}`}</Typography>
                      <Typography>{`Duration: ${e.duration}`}</Typography>
                      <Typography>{`Platofrm: ${e.platform}`}</Typography>
                      <Typography>{`Click to join: ${e.link}`}</Typography>
                    </Card>
                    </Grid>
                  )
                })
              }
        </Grid>

          </div>
        )
    }
}


export default Home;