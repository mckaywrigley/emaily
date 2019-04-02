import React, { Component } from 'react'
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'alksdjbfsakjdgnalksjgbsagbalksjbg';
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return <li><a>Logout</a></li>;
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <a className="left brand-logo">Email</a>
                <ul>
                    <li className="right">{this.renderContent()}</li>
                </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default connect(mapStateToProps)(Header);
