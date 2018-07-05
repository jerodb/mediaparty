import React from 'react';
import PropTypes from 'prop-types';

class CardSecondary extends React.Component {
  render() {
    const { about, avatar, name, url, username } = this.props.data;
    const pic = avatar || '../assets/img/ph_speakers.png';
    const urlLink = url.startsWith('http') ? url : `http://${ url }`;

    const readMore = {
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      top: 140,
      fontWeight: 600,
      paddingTop: 6,
      height: 24,
    };

    return (
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 event__speaker">
        <a href={ `${ process.env.SCHED_URL }/speaker/${ username }` } target="_blank" rel="noopener noreferrer" className="event__speaker_info_link">
          <img src={ pic } alt={ `${ name } pic` } className="event__speaker_img" />
          <div className="event__speaker_name">
            <p>{ name }</p>
          </div>
        </a>
        <div className="event__speaker_tw">
          <a href={ urlLink } target="_blank" rel="noopener noreferrer" className="event__speaker_tw_link">{ url }</a>
        </div>
        <div className="event__speaker_desc" style={ { position: 'relative' } }>
          <p>{ about }</p>
          <div style={ readMore }>
            <a style={ { color: '#333333' } } href={ `${ process.env.SCHED_URL }/speaker/${ username }` } target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

CardSecondary.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardSecondary;
