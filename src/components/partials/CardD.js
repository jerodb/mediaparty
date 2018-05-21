import React from 'react';
import PropTypes from 'prop-types';

class CardD extends React.Component {
  render() {
    const { avatar, name, username } = this.props.data;

    const pic = avatar || '../assets/img/ph_speakers.png';

    return (
      <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 event__recruiter">
        <a href={ `https://mediaparty2017.sched.com/volunteer/${ username }` } target="_blank" rel="noopener noreferrer" className="">
          <img src={ pic } className="event__recruiter_img" />
          <div className="event__recruiters_name">
            <p>{ name }</p>
          </div>
        </a>
      </div>
    );
  }
}

CardD.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardD;
