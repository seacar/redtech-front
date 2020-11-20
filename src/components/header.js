import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

class Header extends Component {
    render() {
        return (
            <div className="nav-bar">
            <AppBar position="static" elevation={0}>
                <Toolbar className="nav-container">
                <Typography variant="h6" className="nav-title" component={Link} to={"/"}>
                    Madelon
                </Typography>
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

export default Header;