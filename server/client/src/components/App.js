import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => {
    return (
        <h2>Dashboard</h2>
    );
}

const SurveyNew = () => {
    return (
        <h2>SurveyNew</h2>
    );
}

class App extends React.Component {
    componentDidMount(){
      this.props.fetchUser();
    }
    

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                    <Route path="/header" component={Header} />
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(
    null,
    actions 
)(App);