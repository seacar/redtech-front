import React, { Component } from "react"
import { Link } from 'react-router-dom'

import validate from "validate.js"

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import constraints from "../data/constraints"

const initialState = {
    performingAction: false,
    emailAddress: "",
    password: "",
    errors: null,
};
  

class SignIn extends Component {

    constructor(props) {
        super(props);
    
        this.state = initialState;
      }
    
      signUp = () => {
        const {
          emailAddress,
          password,
        } = this.state;
    
        const errors = validate(
          {
            emailAddress: emailAddress,
            password: password,
          },
          {
            emailAddress: constraints.emailAddress,
            password: constraints.password,
          }
        );
    
        if (errors) {
          this.setState({
            errors: errors,
          });
        } else {
          this.setState(
            {
              performingAction: true,
              errors: null,
            }
          );
        }
      };

    handleKeyPress = (event) => {
        const {
          emailAddress,
          password,
        } = this.state;
    
        if (
          !emailAddress ||
          !password
        ) {
          return;
        }
    
        const key = event.key;
    
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
          return;
        }
    
        if (key === "Enter") {
          this.signUp();
        }
    };

    handleEmailAddressChange = (event) => {
        const emailAddress = event.target.value;
    
        this.setState({
          emailAddress: emailAddress,
        });
      };
    
    handlePasswordChange = (event) => {
        const password = event.target.value;
    
        this.setState({
          password: password,
        });
    };

    render() {
        const {
            performingAction,
            emailAddress,
            password,
            errors,
        } = this.state;
        return (
            <Grid container>
              <Grid item md={4}></Grid>
              <Grid item md={4} className="signup-box">
                <Grid item xs className="signup-input">
                  <TextField
                      autoComplete="email"
                      disabled={performingAction}
                      error={!!(errors && errors.emailAddress)}
                      fullWidth
                      helperText={
                      errors && errors.emailAddress
                          ? errors.emailAddress[0]
                          : ""
                      }
                      label="E-mail address"
                      required
                      type="email"
                      value={emailAddress}
                      variant="outlined"
                      InputLabelProps={{ required: false }}
                      onChange={this.handleEmailAddressChange}
                  />
                </Grid>

                <Grid item xs className="signup-input">
                  <TextField
                      autoComplete="new-password"
                      disabled={performingAction}
                      error={!!(errors && errors.password)}
                      fullWidth
                      helperText={
                      errors && errors.password ? errors.password[0] : ""
                      }
                      label="Password"
                      required
                      type="password"
                      value={password}
                      variant="outlined"
                      InputLabelProps={{ required: false }}
                      onChange={this.handlePasswordChange}
                  />
                </Grid>
                <Grid item xs className="signup-button">
                  <Button
                      disabled={
                      !emailAddress ||
                      !password ||
                      performingAction
                      }
                      variant="contained"
                      onClick={this.signUp}
                  >
                      Sign up
                  </Button>
                </Grid>
                <Grid item xs className="signup-link">
                    Need to create an account? <Link color="primary" to="/">Sign In</Link>
                </Grid>
                </Grid>
                <Grid item md={4}></Grid>
            </Grid>
        );
    }
}



export default SignIn;