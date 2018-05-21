import React from 'react';
import { Form, Text, Textarea, RadioGroup, Radio, Checkbox, FormError } from 'react-form';
import { browserHistory } from 'react-router';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

class Workshop extends React.Component {
  constructor() {
    super();
    this.state = {
      suggestedProfile_Other_disable: 'disabled',
      showErrorMsg: '',
      submiting: false,
    };
    this.toggleDisable = this.toggleDisable.bind(this);
  }

  fetchForm(data) {
    const postBody = data;
    postBody.sessionType = 'workshop';

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
          browserHistory.push(`/${ this.props.lang }posit-workshop-success`);
        } else {
          this.setState({ submiting: false });
          this.setState({ showErrorMsg: this.props.errorMsg });
        }
      });
    });
  }

  toggleDisable() {
    const dis = !this.state.suggestedProfile_Other_disable ? 'disabled' : false;
    this.setState({ suggestedProfile_Other_disable: dis });
  }

  render() {
    const { formTitle, intro, username, company, about, position, email, twitter, phone, questionA, questionB, questionC,
      positTitle, name, description, timeSuggested, suggestedProfile, skillsAndBackground, skillsAndBackgroundLevel,
      expectedOutcome, requirements, submit, required, requiredMsg } = this.props;

    const submitClass = classnames({ 'not-display': this.state.submiting });
    const wheelClass = classnames({ 'not-display': !this.state.submiting });

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
                this.setState({ submiting: true });
                this.fetchForm(values);
              } }
              validate={ ({ username, company, about, email, questionA, questionC, name, description, timeSuggested, suggestedProfile_Hackers_Software_Developers, suggestedProfile_Hacks_Journalists_Editors, suggestedProfile_Designers, suggestedProfile_Social_Data_Activists, suggestedProfile_Entrepreneurs, suggestedProfile_All_Of_Them, suggestedProfile_Other_Select }) => {
                return {
                  username: !username ? required : undefined,
                  company: !company ? required : undefined,
                  about: !about ? required : undefined,
                  email: !email ? required : undefined,
                  questionA: !questionA ? required : undefined,
                  questionC: !questionC ? required : undefined,
                  name: !name ? required : undefined,
                  description: !description ? required : undefined,
                  timeSuggested: !timeSuggested ? required : undefined,
                  suggestedProfile: (!suggestedProfile_Hackers_Software_Developers && !suggestedProfile_Hacks_Journalists_Editors && !suggestedProfile_Designers && !suggestedProfile_Social_Data_Activists && !suggestedProfile_Entrepreneurs && !suggestedProfile_All_Of_Them && !suggestedProfile_Other_Select) ? required : undefined,
                };
              } }
              onValidationFail={ () => {
                this.setState({ submiting: false });
                this.setState({ showErrorMsg: requiredMsg });
              } }
              postSubmit={ () => {
                this.setState({ submiting: true });
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
                      <h4 className="form-label">{ position }: </h4>
                      <Text field="position" type="text" />
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
                      <p>{ name.description }</p>
                      <Text field="name" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ description.label }: <span className="mandatory">(*)</span></h4>
                      <p>{ description.description }</p>
                      <Textarea field="description" type="text" />
                    </div>

                    <div>
                      <h4 className="form-label">{ timeSuggested.label }: <span className="mandatory">(*)</span></h4>
                      <p>{ timeSuggested.description }</p>
                      <RadioGroup field="timeSuggested">
                        <label>
                          <Radio value="2 hours" />
                          <span>{ timeSuggested.options[0] }</span>
                        </label>
                        <label>
                          <Radio value="3 hours" />
                          <span>{ timeSuggested.options[1] }</span>
                        </label>
                      </RadioGroup>
                    </div>

                    <div>
                      <h4 className="form-label">{ suggestedProfile.label }: <span className="mandatory">(*)</span></h4>
                      <FormError field="suggestedProfile" />
                      <label className="checkbox">
                        <Checkbox field="suggestedProfile_Hackers_Software_Developers" />
                        <span>{ suggestedProfile.options[0] }</span>
                      </label>
                      <label className="checkbox">
                        <Checkbox field="suggestedProfile_Hacks_Journalists_Editors" />
                        <span>{ suggestedProfile.options[1] }</span>
                      </label>
                      <label className="checkbox">
                        <Checkbox field="suggestedProfile_Designers" />
                        <span>{ suggestedProfile.options[2] }</span>
                      </label>
                      <label className="checkbox">
                        <Checkbox field="suggestedProfile_Social_Data_Activists" />
                        <span>{ suggestedProfile.options[3] }</span>
                      </label>
                      <label className="checkbox">
                        <Checkbox field="suggestedProfile_Entrepreneurs" />
                        <span>{ suggestedProfile.options[4] }</span>
                      </label>
                      <label className="checkbox">
                        <Checkbox field="suggestedProfile_All_Of_Them" />
                        <span>{ suggestedProfile.options[5] }</span>
                      </label>
                      <label className="checkbox">
                        <Checkbox field="suggestedProfile_Other_Select" onClick={ this.toggleDisable } />
                        <span>{ suggestedProfile.options[6] }</span>
                      </label>
                      <Text field="suggestedProfile_Other" type="text" disabled={ this.state.suggestedProfile_Other_disable } />
                    </div>

                    <div>
                      <h4 className="form-label">{ skillsAndBackground.label }:</h4>
                      <p>{ skillsAndBackground.description }</p>
                      <Textarea field="skillsAndBackground" />
                    </div>

                    <div>
                      <h4 className="form-label">{ skillsAndBackgroundLevel.label }:</h4>
                      <p>{ skillsAndBackgroundLevel.description }</p>
                      <RadioGroup field="skillsAndBackgroundLevel">
                        <label>
                          <Radio value="High" />
                          <span>{ skillsAndBackgroundLevel.options[0] }</span>
                        </label>
                        <label>
                          <Radio value="Middle" />
                          <span>{ skillsAndBackgroundLevel.options[1] }</span>
                        </label>
                        <label>
                          <Radio value="Low" />
                          <span>{ skillsAndBackgroundLevel.options[2] }</span>
                        </label>
                        <label>
                          <Radio value="None" />
                          <span>{ skillsAndBackgroundLevel.options[3] }</span>
                        </label>
                      </RadioGroup>
                    </div>

                    <div>
                      <h4 className="form-label">{ expectedOutcome.label }: </h4>
                      <p>{ expectedOutcome.description }</p>
                      <Textarea field="expectedOutcome" />
                    </div>

                    <div>
                      <h4 className="form-label">{ requirements.label }: </h4>
                      <p>{ requirements.description }</p>
                      <Textarea field="requirements" />
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
Workshop.propTypes = {
  route: PropTypes.object,
};
*/
export default Workshop;
