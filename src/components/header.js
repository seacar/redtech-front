import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

class Header extends Component {
    render() {
        const { authenticated } = this.props;
        return (
            <div className="nav-bar">
            <AppBar position="static" elevation={0}>
                <Toolbar className="nav-container">
                <Typography variant="h6" className="nav-title" component={Link} to={"/"}>
                    Madelon
                </Typography>
                {authenticated && (
                    <div>
                        <Button color="inherit" to={"/dashboard"} component={Link} >Dashboard</Button>
                        <Button color="inherit" to={"/logout"} component={Link} >Signout</Button>
                    </div>
                )}
                {!authenticated && (
                    <div>
                        <Button color="inherit" to={"/login"} component={Link} >Signin</Button>
                        <Button color="inherit" to={"/signup"} component={Link} >Signup</Button>
                    </div>
                )}
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

export default Header;