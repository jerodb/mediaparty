import React from 'react';
import PropTypes from 'prop-types';

class CardE extends React.Component {
  render() {
    const { avatar, name, username } = this.props.data;

    const pic = avatar || '../assets/img/ph_speakers.png';

    return (
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 event__team_member">
        <a href={ `https://mediaparty2017.sched.com/artist/${ username }` } target="_blank" rel="noopener noreferrer" className="">
          <img src={ pic } className="event__team_img" />
          <div className="event__team_name">
            <p>{ name }</p>
          </div>
        </a>
      </div>
    );
  }
}

CardE.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardE;
