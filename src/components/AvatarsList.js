import React from 'react'
import PropTypes from 'prop-types'
import { phSpeakers } from '../res/images'

const AvatarsList = ({
  Avatar, list, name, type
}) => (
  <section className={`event__${type} wrapper`}>
    <h2>
      <div className="title-txt">
        {name}
      </div>
      <div className="title-line" />
    </h2>
    <div className="row flex-wrapper">
      {
      list.map((data, k) => {
        let pic = phSpeakers
        let url = data && data.url

        if (data && data.avatar && !data.avatar.startsWith('https://graph.facebook')) {
          pic = data.avatar
        }

        if (url && url.startsWith('http')) {
          url = `http://${url}`
        }

        return <Avatar key={JSON.stringify(k)} {...data} pic={pic} url={url} />
      })
    }
    </div>
  </section>
)

AvatarsList.propTypes = {
  Avatar: PropTypes.func,
  list: PropTypes.array,
  name: PropTypes.string,
  type: PropTypes.string,
}

export default AvatarsList
