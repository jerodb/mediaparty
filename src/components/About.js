import React from 'react';
import PropTypes from 'prop-types';
import CardAbout from './partials/CardAbout';

class About extends React.Component {
  render() {
    const about = this.props.data;
    const colLeftElements = [];
    const colRightElements = [];

    return (
      <div id="about" className="event__about_wrapper">
        {
          about.map((item, k) => {
            const order = k % 2;

            if (!order) colLeftElements.push(<CardAbout data={ item } />);
            else colRightElements.push(<CardAbout data={ item } />);

            if (about.length === k + 1) {
              return (
                <div>
                  <div className="col-md-6 col-xs-12 row-l">
                    { colLeftElements.map(i => i) }
                  </div>
                  <div className="col-md-6 col-xs-12 row-r">
                    { colRightElements.map(i => i) }
                  </div>
                </div>
              );
            }
          })
        }
      </div>
    );
  }
}


About.propTypes = {
  data: PropTypes.array,
};

export default About;
