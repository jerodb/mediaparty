import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import NoSsr from '../NoSsr'
import { GAEvents, handleGAClick } from '../../lib/GoogleAnalytics'

const DescriptionComponent = ({ description, video }) => (
  <section className="event__description">
    <div className="event__description_inner">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__aside">
          <div className="event__hhba_wrapper">
            <LazyLoadComponent>
              <p className="event__hhba">Hacks/Hackers Buenos Aires</p>
            </LazyLoadComponent>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__desc_text">
          <div className="event__desc_wrapper">
            <p dangerouslySetInnerHTML={description} />
            <NoSsr>
              <button
                className="interactive-element video-wrapper"
                dangerouslySetInnerHTML={video}
                onClick={() => handleGAClick(GAEvents.hero[6])}
                type="button"
              />
            </NoSsr>
          </div>
        </div>
      </div>
    </div>
    <LazyLoadComponent>
      <div className="event__description_backgronud" />
    </LazyLoadComponent>
  </section>
)

DescriptionComponent.propTypes = {
  description: PropTypes.object,
  video: PropTypes.object,
}
export default DescriptionComponent
