import React from 'react';
import CardQuote from './partials/CardQuote';

class Quotes extends React.Component {
  render() {
    const quotes = this.props.data;

    return (
      <div id="quotes" className="event__quotes row">
        {
          quotes.map(item => <CardQuote data={ item } />)
        }
      </div>
    );
  }
}

export default Quotes;
