import React from 'react';
import { Form, Text, Textarea, RadioGroup, Radio } from 'react-form';
import { browserHistory } from 'react-router';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

class Keynote extends React.Component {
  constructor() {
    super();
    this.state = {
      showErrorMsg: '',
      submitting: false,
    };
  }

  fetchForm(data) {
    const postBody = data;
    postBody.sessionType = 'keynote';

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
          browserHistory.push(`/${ this.props.lang }posit-keynote-success`);
        } else {
          this.setState({ submitting: false });
          this.setState({ showErrorMsg: this.props.errorMsg });
        }
      });
    });
  }

  render() {
    const { formTitle, username, email, twitter, name, description, technicalNeeds, prefer, submit, required, requiredMsg } = this.props;
    // intro
    const submitClass = classnames({ 'not-display': this.state.submitting });
    const wheelClass = classnames({ 'not-display': !this.state.submitting });

    return (
      <div>
        <div className="row event__hero" />
        <div className="add-proposal">
          <div className="formTitle">Open call: { formTitle }</div>
          <div className="row" style={ { maxWidth: 980, margin: 'auto' } }>
            <Form
              onSubmit={ (values) => {
                this.setState({ showErrorMsg: '' });
                this.setState({ submitting: true });
                this.fetchForm(values);
              } }
              validate={ ({ username, email, name, description, technicalNeeds, prefer }) => {
                return {
                  username: !username ? required : undefined,
                  email: !email ? required : undefined,
                  name: !name ? required : undefined,
                  description: !description ? required : undefined,
                  technicalNeeds: !technicalNeeds ? required : undefined,
                  prefer: !prefer ? required : undefined,
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
                      <h4 className="form-label">{ email }: <span className="mandatory">(*)</span></h4>
                      <Text field="email" type="text" />
                    </div>
                    <div>
                      <h4 className="form-label">{ twitter }: </h4>
                      <Text field="twitter" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ name.label }: <span className="mandatory">(*)</span></h4>
                      <Text field="name" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ description.label }: <span className="mandatory">(*)</span></h4>
                      <p style={ { marginBottom: 0 } } dangerouslySetInnerHTML={ description.description } />
                      <Textarea field="description" />
                    </div>

                    <div>
                      <h4 className="form-label">{ technicalNeeds.label }: <span className="mandatory">(*)</span></h4>
                      <Textarea field="technicalNeeds" />
                    </div>

                    <div>
                      <h4 className="form-label">{ prefer.label }: <span className="mandatory">(*)</span></h4>
                      <p>{ prefer.description }</p>
                      <RadioGroup field="prefer">
                        <label>
                          <Radio value={ prefer.options[0] } />
                          <span>{ prefer.options[0] }</span>
                        </label>
                        <label>
                          <Radio value={ prefer.options[1] } />
                          <span>{ prefer.options[1] }</span>
                        </label>
                      </RadioGroup>
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
Keynote.propTypes = {
  route: PropTypes.object,
};
*/
export default Keynote;
