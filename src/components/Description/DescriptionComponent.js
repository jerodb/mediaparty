import React from 'react'
import PropTypes from 'prop-types'
import { GAEvents, handleGAClick } from '../../lib/GoogleAnalytics'

const DescriptionComponent = ({ description, video }) => (
  <section className="event__description">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__aside">
        <div className="event__hhba_wrapper">
          <p className="event__hhba">Hacks/Hackers Buenos Aires</p>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__desc_text">
        <div className="event__desc_wrapper">
          <p dangerouslySetInnerHTML={description} />
          <button
            className="interactive-element video-wrapper"
            dangerouslySetInnerHTML={video}
            onClick={() => handleGAClick(GAEvents.hero[6])}
            type="button"
          />
        </div>
      </div>
    </div>
  </section>
)

DescriptionComponent.propTypes = {
  description: PropTypes.object,
  video: PropTypes.object,
}
export default DescriptionComponent
