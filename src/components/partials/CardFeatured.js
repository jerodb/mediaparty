import React from 'react';
import PropTypes from 'prop-types';
import {phSpeakers} from '../../res/images'

class CardFeatured extends React.Component {
  render() {
    const { about, avatar, name, url, username, id } = this.props.data;
    const align = id % 2 ? 'event__speaker event__speaker_even' : 'event__speaker event__speaker_odd';
    const pic = avatar || phSpeakers;
    const urlLink = url.startsWith('http') ? url : `http://${ url }`;

    const userDescWrapper = {
      position: 'relative',
      maxHeight: 244,
      overflow: 'hidden',
    };

    const userDescription = {
      lineHeight: '20px',
      marginBottom: '5px',
    };

    const readMore = {
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      top: 220,
      fontWeight: 600,
      paddingTop: 4,
      height: 24,
    };

    return (
      <div className={ align }>
        <img src={ pic } alt={ `${ name } pic` } className="event__speaker_img" />
        <div className="event__speaker_info">
          <a href={ `${ process.env.SCHED_URL }/speaker/${ username }` } target="_blank" rel="noopener noreferrer" className="event__speaker_info_link">
            <div className="event__speaker_name">
              <p>{ name }</p>
            </div>
          </a>
          <div className="event__speaker_tw">
            <a href={ urlLink } target="_blank" rel="noopener noreferrer" className="event__speaker_tw_link">{ url }</a>
          </div>
          <div className="event__speaker_desc" style={ userDescWrapper }>
            <p style={ userDescription }>{ about }</p>
            <div style={ readMore }>
              <a style={ { color: '#333333' } } href={ `${ process.env.SCHED_URL }/speaker/${ username }` } target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CardFeatured.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardFeatured;
