import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import NoSsr from '../NoSsr'
import { GAEvents, handleGAClick } from '../../lib/GoogleAnalytics'

const DescriptionComponent = ({ description, scrollPosition, video }) => (
  <section className="event__description">
    <NoSsr>
      <div className="event__description_inner">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__aside">
            <div className="event__hhba_wrapper">
              <LazyLoadComponent
                scrollPosition={scrollPosition}
                threshold={250}
              >
                <p className="event__hhba">Hacks/Hackers Buenos Aires</p>
              </LazyLoadComponent>
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
      </div>
      <div className="event__description_backgronud">
        <LazyLoadComponent
          scrollPosition={scrollPosition}
          threshold={250}
        >
          <div className="event__description_backgronud_img" />
        </LazyLoadComponent>
      </div>
    </NoSsr>
  </section>
)

DescriptionComponent.propTypes = {
  description: PropTypes.object,
  scrollPosition: PropTypes.object,
  video: PropTypes.object,
}
export default DescriptionComponent
