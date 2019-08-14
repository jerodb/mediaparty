import React from 'react';
import PropTypes from 'prop-types';
import {phSpeakers} from '../../res/images'

class CardB extends React.Component {
  render() {
    const { avatar, name } = this.props.data;

    const pic = avatar || phSpeakers;

    return (
      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 event__sponsor">
        <img src={ pic } className="event__sponsors_img" />
        <div className="event__collaborators_name">
          <p>{ name }</p>
        </div>
      </div>
    );
  }
}

CardB.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardB;
