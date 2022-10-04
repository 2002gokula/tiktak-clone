import React, { useState } from "react"
import "./VideoSidebar.css"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import MessageIcon from "@mui/icons-material/Message"
import ShareIcon from "@mui/icons-material/Share"

function VideoFooter({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="videoSideBra">
      <div className="videoSideBar__button">
        {liked ? (
          <FavoriteIcon
            style={{ color: "red" }}
            fontSize="large"
            onClick={(e) => setLiked(false)}
          />
        ) : (
          <FavoriteBorderIcon
            // onDoubleClick={(e) => setLiked(true)}
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? Number(likes) + 1 : likes}</p>
      </div>
      <div className="videoSideBar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSideBar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoFooter
