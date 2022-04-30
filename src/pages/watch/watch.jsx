import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import './watch.scss'

const  Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://player.vimeo.com/external/499168140.sd.mp4?s=2e3f10847456da44de35b62ce6abf67820db7825&profile_id=139&oauth2_token_id=57447761"
      />
    </div>
  )
}

export default Watch