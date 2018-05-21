import React from 'react';
import { Form, Text, Textarea, RadioGroup, Radio } from 'react-form';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { browserHistory } from 'react-router';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

class LightningTalk extends React.Component {
  constructor() {
    super();
    this.state = {
      showErrorMsg: '',
      submitting: false,
      checkIn: {},
      checkOut: {},
      checkInDay: '',
      checkOutDay: '',
      dateFormat: 'MM/DD/YYYY',
    };

    this.checkInClick = this.checkInClick.bind(this);
    this.checkOutClick = this.checkOutClick.bind(this);
  }

  checkInClick = day => {
    this.setState({
      checkIn: day,
    });
    this.setState({
      checkInDay: day.format(this.state.dateFormat),
    });
  };

  checkOutClick = day => {
    this.setState({
      checkOut: day,
    });
    this.setState({
      checkOutDay: day.format(this.state.dateFormat),
    });
  };

  fetchForm(data) {
    const postBody = data;
    postBody.sessionType = 'lightning talk';
    postBody.checkIn = Object.keys(this.state.checkIn).length !== 0 ? this.state.checkIn.format('DD/MM/YYYY') : '';
    postBody.checkOut = Object.keys(this.state.checkOut).length !== 0 ? this.state.checkOut.format('DD/MM/YYYY') : '';

    fetch('/api/session/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody),
    })
    .then((response) => {
      response.json().then((res) => {
        if (res === true) {
          browserHistory.push(`/${ this.props.lang }posit-lightning-talk-success`);
        } else {
          this.setState({ submitting: false });
          this.setState({ showErrorMsg: this.props.errorMsg });
        }
      });
    });
  }

  render() {
    const { formTitle, intro, username, company, about, email, twitter, phone, questionA, questionB, questionC,
      positTitle, name, description, expectedOutcome, relatedUrl, visitorsTitle, whereYouLive, checkIn, checkOut, cityOfOrigin, submit, required, requiredMsg } = this.props;

    const submitClass = classnames({ 'not-display': this.state.submitting });
    const wheelClass = classnames({ 'not-display': !this.state.submitting });

    this.state.dateFormat = checkIn.format;

    return (
      <div>
        <div className="row event__hero" />
        <div className="add-proposal">
          <div className="formTitle">Open call: { formTitle }</div>
          <div className="row" style={ { maxWidth: 980, margin: 'auto' } }>
            <div style={ { marginBottom: 30 } } dangerouslySetInnerHTML={ intro } />
            <Form
              onSubmit={ (values) => {
                this.setState({ showErrorMsg: '' });
                this.setState({ submitting: true });
                this.fetchForm(values);
              } }
              validate={ ({ username, company, about, email, questionA, questionC, name, description, expectedOutcome, whereYouLive }) => {
                return {
                  username: !username ? required : undefined,
                  company: !company ? required : undefined,
                  about: !about ? required : undefined,
                  email: !email ? required : undefined,
                  questionA: !questionA ? required : undefined,
                  questionC: !questionC ? required : undefined,
                  name: !name ? required : undefined,
                  description: !description ? required : undefined,
                  expectedOutcome: !expectedOutcome ? required : undefined,
                  whereYouLive: !whereYouLive ? required : undefined,
                };
              } }
              onValidationFail={ () => {
                this.setState({ submitting: false });
                this.setState({ showErrorMsg: requiredMsg });
              } }
              postSubmit={ () => {
                this.setState({ submitting: true });
              } }
            >
              {({ submitForm }) => {
                return (
                  <form onSubmit={ submitForm }>
                    <div>
                      <h4 className="form-label">{ username }: <span className="mandatory">(*)</span></h4>
                      <Text field="username" type="text" />
                    </div>
                    <div>
                      <h4 className="form-label">{ company }: <span className="mandatory">(*)</span></h4>
                      <Text field="company" type="text" />
                    </div>
                    <div>
                      <h4 className="form-label">{ about.label }: <span className="mandatory">(*)</span></h4>
                      <p>{ about.description }</p>
                      <Textarea field="about" />
                    </div>
                    <div>
                      <h4 className="form-label">{ email }: <span className="mandatory">(*)</span></h4>
                      <Text field="email" type="text" />
                    </div>
                    <div>
                      <h4 className="form-label">{ twitter }: </h4>
                      <Text field="twitter" type="text" />
                    </div>
                    <div>
                      <h4 className="form-label">{ phone.label }: </h4>
                      <p>{ phone.description }</p>
                      <Text field="phone" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ questionA.label }: <span className="mandatory">(*)</span></h4>
                      <p>{ questionA.description }</p>
                      <RadioGroup field="questionA">
                        <label>
                          <Radio value="yes" />
                          <span>{ questionA.options[0] }</span>
                        </label>
                        <label>
                          <Radio value="no" />
                          <span>{ questionA.options[1] }</span>
                        </label>
                      </RadioGroup>
                    </div>
                    <div>
                      <h4 className="form-label">{ questionB }: </h4>
                      <Text field="questionB" type="text" />
                    </div>
                    <div>
                      <h4 className="form-label">{ questionC.label } <span className="mandatory">(*)</span></h4>
                      <RadioGroup field="questionC">
                        <label>
                          <Radio value="yes" />
                          <span>{ questionC.options[0] }</span>
                        </label>
                        <label>
                          <Radio value="no" />
                          <span>{ questionC.options[1] }</span>
                        </label>
                      </RadioGroup>
                    </div>

                    <h3 className="sub-title">{ positTitle }</h3>

                    <div>
                      <h4 className="form-label">{ name.label }: <span className="mandatory">(*)</span></h4>
                      <Text field="name" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ description.label }: <span className="mandatory">(*)</span></h4>
                      <Textarea field="description" />
                    </div>

                    <div>
                      <h4 className="form-label">{ expectedOutcome.label }: <span className="mandatory">(*)</span></h4>
                      <Textarea field="expectedOutcome" />
                    </div>

                    <div>
                      <h4 className="form-label">{ relatedUrl.label }: </h4>
                      <Text field="relatedUrl" type="text" />
                    </div>

                    <h3 className="sub-title">{ visitorsTitle }</h3>

                    <div>
                      <h4 className="form-label">{ whereYouLive.label }: <span className="mandatory">(*)</span></h4>
                      <Text field="whereYouLive" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ checkIn.label }:</h4>
                      <DayPickerInput
                        name="checkInDay"
                        placeholder={ checkIn.format }
                        format={ checkIn.format }
                        onDayChange={ this.checkInClick }
                        value={ this.state.checkInDay }
                      />
                    </div>

                    <div>
                      <h4 className="form-label">{ checkOut.label }:</h4>
                      <DayPickerInput
                        name="checkOutDay"
                        placeholder={ checkOut.format }
                        format={ checkOut.format }
                        onDayChange={ this.checkOutClick }
                        value={ this.state.checkOutDay }
                      />
                    </div>

                    <div>
                      <h4 className="form-label">{ cityOfOrigin.label }: </h4>
                      <Text field="cityOfOrigin" type="text" />
                    </div>

                    <button type="submit" className={ submitClass }>{ submit }</button>
                    <span className={ wheelClass }><img className="form-loader" src="../assets/img/loader.gif" alt="loading..." /></span>
                    <div className="FormError globalErrorMsg">{ this.state.showErrorMsg }</div>
                  </form>
                );
              }}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
/*
LightningTalk.propTypes = {
  route: PropTypes.object,
};
*/
export default LightningTalk;
