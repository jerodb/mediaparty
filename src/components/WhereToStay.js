import React from 'react'
import PropTypes from 'prop-types'

const WhereToStay = ({ description, description2, title }) => (
  <section className="wrapper event__where_to_stay">
    <h2 id="where-to-stay">
      <div className="title-txt">{ title }</div>
      <div className="title-line" />
    </h2>
    <div className="row">
      <div
        className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__where_to_stay_description"
        dangerouslySetInnerHTML={description}
      />
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 event__where_to_stay_description">
        <span dangerouslySetInnerHTML={description2} />
        <p>
          <a
            href="http://www.abastohotel.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
          Abasto Hotel
          </a>
        </p>
        <p>
          <a
            href="https://www.hotelegipto.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hotel Egipto
          </a>
        </p>
        <p>
          <a
            href="http://www.nontuehotel.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hotel N’Ontue
          </a>
        </p>
        <p>
          <a
            href="https://www.trivago.com.ar/buenos-aires-545952/hotel/abasto-apartments---suites-895991"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abasto Apartments & Suites
          </a>
        </p>
      </div>
    </div>
  </section>
)

WhereToStay.propTypes = {
  description: PropTypes.object,
  description2: PropTypes.object,
  title: PropTypes.string,
}

export default WhereToStay
