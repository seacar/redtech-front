import React, { Component } from 'react'

import logo from '../files/images/logo.png';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

class Header extends Component {
    render() {
        return (
            <div className="nav-bar">
            <AppBar position="static" elevation={0}>
                <Toolbar className="nav-container">
                    <img className="nav-logo" src={logo} alt="Logo" />
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

export default Header;