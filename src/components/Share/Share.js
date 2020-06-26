import React from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    TwitterIcon,
  } from "react-share";


  class Share extends React.Component{
      render(){
          return(
            <TwitterShareButton
                url='www.rahul.com'
                title="Twitter"
            >
            <TwitterIcon
                size={42}
                round />
          </TwitterShareButton>
          )
      }
  }

  export default Share;