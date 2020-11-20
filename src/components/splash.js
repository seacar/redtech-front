import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../files/images/logo.png';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

class Splash extends Component {

    render() {

        return (
            <Grid container className="splash-container">
                <Grid item md={12}>
                    <img className="splash-logo" src={logo} alt="Logo" />
                </Grid>
                <Grid item md={12}>
                    
                </Grid>
                <Grid item md={12}>
                    <Button variant="contained" component={Link} to={'/signup'}>Sign Up</Button>
                    <Button component={Link} to={'/signin'}>Sign In</Button>
                </Grid>
            </Grid>
        )
    }
}

export default Splash