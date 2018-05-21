import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Text, Textarea, RadioGroup, Radio, Checkbox } from 'react-form';
import DayPickerInput from 'react-day-picker/DayPickerInput';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

class MediaFair extends React.Component {
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
      success: false
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
    postBody.sessionType = 'media fair';
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
          this.setState({ success: true });
        } else {
          this.setState({ submitting: false });
          this.setState({ showErrorMsg: this.props.errorMsg });
        }
      });
    });
  }

  render() {
    if(this.state.success)
      return (<Redirect to="/success" />);

    const { formTitle, intro, username, company, about, email, twitter, phone, questionD, positTitle, positSubTitle, MF_project_name, MF_exhibitor_phone, MF_exhibitor_twitter, MF_exhibitor_email, MF_exhibitor_name, exhibitorTitle, MF_terms_conditions, MF_logo, MF_url, MF_description, visitorsTitle, whereYouLive, checkIn, checkOut, cityOfOrigin, submit, required, requiredMsg } = this.props;

    const submitClass = classnames({ 'not-display': this.state.submitting });
    const wheelClass = classnames({ 'not-display': !this.state.submitting });

    this.state.dateFormat = checkIn.format;

    return (
      <div>
        <div className="row event__hero" />
        <div className="add-proposal">
          <div className="formTitle">{ formTitle }</div>
          <div className="row" style={ { maxWidth: 980, margin: 'auto' } }>
            <div style={ { marginBottom: 30 } } dangerouslySetInnerHTML={ intro } />
            <Form
              onSubmit={ (values) => {
                this.setState({ showErrorMsg: '' });
                this.setState({ submitting: true });
                this.fetchForm(values);
              } }
              validate={ ({ username, company, about, email, questionD, whereYouLive, name, MF_terms_conditions, MF_logo, MF_url, MF_description }) => {
                return {
                  username: !username ? required : undefined,
                  company: !company ? required : undefined,
                  about: !about ? required : undefined,
                  email: !email ? required : undefined,
                  questionD: !questionD ? required : undefined,
                  whereYouLive: !whereYouLive ? required : undefined,
                  name: !name ? required : undefined,
                  MF_terms_conditions: !MF_terms_conditions ? required : undefined,
                  MF_logo: !MF_logo ? required : undefined,
                  MF_url: !MF_url ? required : undefined,
                  MF_description: !MF_description ? required : undefined,
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
                      <h4 className="form-label">{ questionD.label }: <span className="mandatory">(*)</span></h4>
                      <RadioGroup field="questionD">
                        <label>
                          <Radio value="yes" />
                          <span>{ questionD.options[0] }</span>
                        </label>
                        <label>
                          <Radio value="no" />
                          <span>{ questionD.options[1] }</span>
                        </label>
                      </RadioGroup>
                    </div>

                    <h3 className="sub-title" style={ { marginBottom: '5px' } }>{ positTitle }</h3>
                    <p>{ positSubTitle }</p>

                    <div>
                      <h4 className="form-label">{ MF_project_name.label }: <span className="mandatory">(*)</span></h4>
                      <p>{ MF_project_name.description }</p>
                      <Text field="name" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ MF_description.label }: <span className="mandatory">(*)</span></h4>
                      <p>{ MF_description.description }</p>
                      <Textarea field="MF_description" />
                    </div>

                    <div>
                      <h4 className="form-label">{ MF_url.label }: <span className="mandatory">(*)</span></h4>
                      <p>{ MF_url.description }</p>
                      <Text field="MF_url" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ MF_logo.label }: <span className="mandatory">(*)</span></h4>
                      <p>{ MF_logo.description }</p>
                      <Text field="MF_logo" type="text" />
                    </div>

                    <div>
                      <label className="checkbox" style={ { marginTop: '36px' } }>
                        <Checkbox field="MF_terms_conditions" />
                        <span style={ { marginRight: '10px' } }>{ MF_terms_conditions.options[0] }</span><span className="mandatory">(*)</span>
                      </label>
                      <p dangerouslySetInnerHTML={ MF_terms_conditions.description } />
                    </div>

                    <h3 className="sub-title">{ exhibitorTitle }</h3>

                    <div>
                      <h4 className="form-label">{ MF_exhibitor_name.label }:</h4>
                      <Text field="MF_exhibitor_name" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ MF_exhibitor_email.label }:</h4>
                      <Text field="MF_exhibitor_email" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ MF_exhibitor_twitter.label }:</h4>
                      <Text field="MF_exhibitor_twitter" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ MF_exhibitor_phone.label }:</h4>
                      <Text field="MF_exhibitor_phone" type="text" />
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

export default MediaFair;
