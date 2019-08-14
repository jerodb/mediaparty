import React from 'react';
import PropTypes from 'prop-types';
import {phSpeakers} from '../../res/images'

class CardA extends React.Component {
  render() {
    const { avatar, name } = this.props.data;

    const pic = avatar || phSpeakers;

    return (
      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 event__partner">
        <img src={ pic } className="event__partners_img" />
        <div className="event__partners_name">
          <p>{ name }</p>
        </div>
      </div>
    );
  }
}

CardA.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardA;
