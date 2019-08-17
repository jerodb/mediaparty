import React from 'react'
import PropTypes from 'prop-types'
import AboutCard from './AboutCard'

const AboutComponent = ({
  colLeftElements, colRightElements
}) => (
  <div id="about" className="event__about_wrapper">
    <div>
      <div className="col-md-6 col-xs-12 row-l">
        { colLeftElements.map((data, k) => <AboutCard {...data} key={JSON.stringify(k)} />) }
      </div>
      <div className="col-md-6 col-xs-12 row-r">
        { colRightElements.map((data, k) => <AboutCard {...data} key={JSON.stringify(k)} />) }
      </div>
    </div>
  </div>
)

AboutComponent.propTypes = {
  colLeftElements: PropTypes.array,
  colRightElements: PropTypes.array,
}

export default AboutComponent
