import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Description from './DescriptionComponent'

const DescriptionContainer = ({ description }) => {
  const [videoIframe, setVideoIframe] = useState({ __html: '' })

  useEffect(() => {
    setVideoIframe({ __html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-STplo5GrxA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' })
  }, [videoIframe])

  return <Description description={description} video={videoIframe} />
}

DescriptionContainer.propTypes = {
  description: PropTypes.object,
}
export default DescriptionContainer
