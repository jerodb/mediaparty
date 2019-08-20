import React from 'react'
import PropTypes from 'prop-types'
import { GAEvents, handleGAClick } from '../../lib/GoogleAnalytics'

const LiveStreamingComponent = ({ video }) => (
  <section className="wrapper event__streaming">
    <button
      className="interactive-element video-wrapper"
      dangerouslySetInnerHTML={video}
      onClick={() => { handleGAClick(GAEvents.hero[7]) }}
      type="button"
    />
  </section>
)

LiveStreamingComponent.propTypes = {
  video: PropTypes.object,
}

export default LiveStreamingComponent
