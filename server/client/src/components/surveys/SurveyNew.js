import React, { Component } from 'react'
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveryFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    constructor(props) {
        super(props);
        this.state = { showReview: false };
    }

    renderContent() {
        if (this.state.showReview) {
            return <SurveryFormReview onCancel={() => this.setState({ showReview: false })} />;
        }

        return <SurveyForm  onSurveySubmit={() => this.setState({ showReview: true })} />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
