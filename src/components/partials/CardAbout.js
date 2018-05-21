import React from 'react';
import PropTypes from 'prop-types';

class CardAbout extends React.Component {
  render() {
    const { icon, title, description, detail } = this.props.data;

    return (
      <div className="event__about">
        <div className="event__about_icon">
          <img src={ `../assets/img/${ icon }` } alt={ title } />
        </div>
        <div className="event__about_title">{ title }</div>
        <div className="event__about_description">{ description }</div>
        {/*
        <div className="event__about_detail">
          {
            (detail.map(item => <ul>{item.map(i => <li>{ i }</li>)}</ul>))
          }
        </div>
        */}
      </div>
    );
  }
}

CardAbout.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardAbout;
