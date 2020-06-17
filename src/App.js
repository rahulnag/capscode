import React, { Component } from 'react';
import Home from './components/HomePage/Home'
import Courses from './components/Courses/Courses'
import {BrowserRouter, Route, HashRouter, Link} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import TopTab from './components/Toolbar/TopTab'
import TopSideNavigation from './components/NavigationHandler/TopSideNavigation'
import { Hidden } from '@material-ui/core';
import Footer from './components/Footer/Footer'
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

// import BackgroundBlob from './components/BlobDesign/Blob'
class App extends React.Component {

  // onLeave(origin, destination, direction) {
  //   console.log("Leaving section " + origin.index);
  // }
  // afterLoad(origin, destination, direction) {
  //   console.log("After load: " + destination.index);
  // }

  

  render(){
    return(
      <>
      <CssBaseline/>
      <div style={{marginBottom:'60px'}}>
      <Hidden smDown><TopTab/></Hidden></div>
      <div style={{marginBottom:'0px'}}><Hidden mdUp><TopSideNavigation/></Hidden></div>
      {/* I HAVE USED HashRouter THEN ONLY IT WORKED FINE HERE BELOW AND ASLO IN TOPTAB COMPONENT*/}
      <HashRouter>
        <Route exact path='/' component={Home}/>
        <Route exact path='/course' component={Courses}/>
      </HashRouter>
      <Footer/>
      </>
    )}


    // return(
    //   <>
    //   <CssBaseline/>
    //   <div style={{marginBottom:'60px'}}><Hidden smDown><TopTab/></Hidden></div>
    //   <div style={{marginBottom:'0px'}}><Hidden mdUp><TopSideNavigation/></Hidden></div>
    //   <HashRouter>
    //     <Route exact path='/' component={Home}/>
    //     <Route exact path='/course' component={Courses}/>
    //   </HashRouter>
      /* <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["orange", "purple", "green"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <Home />
                <Link to='/'/>
              </div>
              <div className="section">
                <div className="slide">
                  <Courses />
                  <Link to='/course'/>
                </div>
                {/* <div className="slide">
                  <h3>Slide 2.2</h3>
                </div> */}
                {/* <div className="slide">
                  <h3>Slide 2.3</h3>
                </div> */}
              {/* </div>
              <div className="section">
                  <Footer />
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
              </div>
            </div>
          );
        }}
      /> */
  
  
}

export default App;
