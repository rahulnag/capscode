import React from 'react'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme();

theme.typography.p = {
  fontSize: '0.7rem',
  color: 'pink',
  '@media (min-width:600px)': {
    fontSize: '0.7rem',
    color:'red'
    
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
        
        <>
        
        <Grid container style={{height:'100%', backgroundColor:'black',minHeight: '93.5vh'}}>
            <Grid item sm={12} md={6} lg={6} style={{ width:'100%', paddingLeft:'30px',paddingRight:'30px'}}>
            <ThemeProvider theme={theme}>
                <Typography variant="p" style={{color:'#eeff41',fontWeight:"fontWeightLight"}}>
                <h2 style={{paddingTop:'20px',}}>Hey Fox,</h2>
                <h2>If you are a coder you are in the right place...</h2>
                <h2>We write code and make you future ready</h2>
                <br/>
                <br/>
                <br/>
                <h2>Learn the language</h2>
                <h2>Make some small but complex project</h2>
                <h2>See someone experienced writing the codes and learn the another style of writing</h2>
                <h2>Again make some project, this time with better style and understanding...</h2>
                </Typography>
                </ThemeProvider>
            </Grid>
            <Grid item sm={12} md={6} lg={6} style={{justifyContent:'flex-end'}}>
                <img style={{width:'89%', height:'100%', paddingLeft:'10px',paddingTop:'30px'}} src={require('./innovation_.png')} alt="capscode" />
            </Grid>
        </Grid>
          </>
        )
    }
}


export default Home;