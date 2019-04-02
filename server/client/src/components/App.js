import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => {
    return (
        <h2>Header</h2>
    );
}

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

const Landing = () => {
    return (
        <h2>Landing</h2>
    );
}

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/" component={Landing} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/survey/new" component={SurveyNew} />
                    <Route path="/header" component={Header} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;