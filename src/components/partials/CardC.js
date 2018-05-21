import React from 'react';
import PropTypes from 'prop-types';

class CardC extends React.Component {
  render() {
    const { avatar, name } = this.props.data;

    const pic = avatar || '../assets/img/ph_speakers.png';

    return (
      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 event__collaborator">
        <img src={ pic } className="event__collaborators_img" />
        <div className="event__collaborators_name">
          <p>{ name }</p>
        </div>
      </div>
    );
  }
}

CardC.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardC;
