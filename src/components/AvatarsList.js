import React from 'react'
import PropTypes from 'prop-types'

const AvatarsList = ({
  Avatar, list, name, type
}) => {
  if (list.length > 0) {
    return (
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
          const url = data && data.url
          const urlLink = url.startsWith('http') ? url : `http://${url}`

          return (
            <Avatar
              {...data}
              key={JSON.stringify(k)}
              imageSrc={data.avatar}
              urlLink={urlLink}
            />
          )
        })
      }
        </div>
      </section>
    )
  }

  return <></>
}

AvatarsList.propTypes = {
  Avatar: PropTypes.func,
  list: PropTypes.array,
  name: PropTypes.string,
  type: PropTypes.string,
}

export default AvatarsList
