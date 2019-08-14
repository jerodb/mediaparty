import React from 'react';
import PropTypes from 'prop-types';

class CardQuote extends React.Component {
  render() {
    const { title, text } = this.props.data;

    return (
      <div className="col-md-4 col-sm-12 card-quote">
        <div className="card-quote-inner">
          <div className="card-quote-title">
            { title }
          </div>
          <div className="card-quote-text">
            { text }
          </div>
        </div>
      </div>
    );
  }
}

CardQuote.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardQuote;
