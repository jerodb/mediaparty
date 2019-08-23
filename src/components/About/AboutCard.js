import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const AboutCard = ({ description, icon, title }) => (
  (
    <div className="event__about">
      <div className="event__about_icon">
        <LazyLoadImage
          src={icon}
          alt={title}
        />
      </div>
      <div className="event__about_title">{ title }</div>
      <div className="event__about_description">{ description }</div>
    </div>
  )
)

AboutCard.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
}

export default AboutCard
