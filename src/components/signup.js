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
    passwordConfirmation: "",
    errors: null,
};
  

class SignUp extends Component {

    constructor(props) {
        super(props);
    
        this.state = initialState;
      }
    
      signUp = () => {
        const {
          emailAddress,
          password,
          passwordConfirmation,
        } = this.state;
    
        const errors = validate(
          {
            emailAddress: emailAddress,
            password: password,
            passwordConfirmation: passwordConfirmation,
          },
          {
            emailAddress: constraints.emailAddress,
            password: constraints.password,
            passwordConfirmation: constraints.passwordConfirmation,
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
          passwordConfirmation,
        } = this.state;
    
        if (
          !emailAddress ||
          !password ||
          !passwordConfirmation
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
    
    handlePasswordConfirmationChange = (event) => {
        const passwordConfirmation = event.target.value;
    
        this.setState({
          passwordConfirmation: passwordConfirmation,
        });
    };

    render() {
        const {
            performingAction,
            emailAddress,
            password,
            passwordConfirmation,
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
            <Grid item xs className="signup-input">
            <TextField
                autoComplete="password"
                disabled={performingAction}
                error={!!(errors && errors.passwordConfirmation)}
                fullWidth
                helperText={
                errors && errors.passwordConfirmation
                    ? errors.passwordConfirmation[0]
                    : ""
                }
                label="Password Confirmation"
                required
                type="password"
                value={passwordConfirmation}
                variant="outlined"
                InputLabelProps={{ required: false }}
                onChange={this.handlePasswordConfirmationChange}
            />
            <Grid item xs className="signup-button">
            <Button
                disabled={
                !emailAddress ||
                !password ||
                !passwordConfirmation ||
                performingAction
                }
                variant="contained"
                onClick={this.signUp}
            >
                Sign up
            </Button>
            </Grid>
            <Grid item xs className="signup-link">
                Already have an account? <Link color="primary" to="/">Sign In</Link>
            </Grid>
            </Grid>
                </Grid>
                <Grid item md={4}></Grid>
            </Grid>
        );
    }
}



export default SignUp;