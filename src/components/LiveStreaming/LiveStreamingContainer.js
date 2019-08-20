import React from 'react'
import PropTypes from 'prop-types'
import LiveStreaming from './LiveStreamingComponent'

const LiveStreamingContainer = ({ videoId }) => {
  const videoIframe = { __html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?rel=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1" frameborder="0" allowfullscreen></iframe>` }

  if (videoId) return <LiveStreaming video={videoIframe} />

  return <></>
}

LiveStreamingContainer.propTypes = {
  videoId: PropTypes.string,
}

export default LiveStreamingContainer
