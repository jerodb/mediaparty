import React from 'react';
import CardQuote from './partials/CardQuote';
import PropTypes from "prop-types";

class Quotes extends React.Component {
  render() {
    const quotes = this.props.data;

    return (
      <div id="quotes" className="event__quotes row">
        {
          quotes.map((item, k) => <CardQuote key={ k } data={ item } />)
        }
      </div>
    );
  }
}

Quotes.propTypes = {
  data: PropTypes.array,
};

export default Quotes;
