import React, { useRef, useState } from "react"
import "./Video.css"
import VideoFooter from "./VideoFooter/VideoFooter"
import VideoSideBar from "./VideoSidebar/VideoSidebar"

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={url}
      ></video>

      <VideoSideBar likes={likes} shares={shares} messages={messages} />
      <VideoFooter channel={channel} description={description} song={song} />
    </div>
  )
}

export default Video
