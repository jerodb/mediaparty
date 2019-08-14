import React from 'react';
import PropTypes from 'prop-types';
import {phSpeakers} from '../../res/images'

class CardE extends React.Component {
  render() {
    const { avatar, name, username } = this.props.data;

    const pic = avatar || phSpeakers;

    return (
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 event__team_member">
        <a href={ `${ process.env.SCHED_URL }/artist/${ username }` } target="_blank" rel="noopener noreferrer" className="">
          <img src={ pic } alt={ `${ name } pic` } className="event__team_img" />
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
