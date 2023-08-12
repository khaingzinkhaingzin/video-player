import React from 'react'

const Video = ({ videoSrc }) => {
  return (
    <div>
        <video src={videoSrc} loop controls autostart="true"></video>
    </div>
  )
}

export default Video