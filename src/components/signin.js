import React, { Component } from "react"
import { Link } from 'react-router-dom'

import validate from "validate.js"

import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

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

const styles = {
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiFormLabel-root': {
      color: 'white'
    },
    '& .MuiOutlinedInput-input': {
      color: 'white'
    }
  },
  padding: {
    paddingBottom: '3%'
  }
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

        const { classes } = this.props;
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
                <h3>Sign In</h3>
                <Grid item xs className={classes.root}>
                  <TextField
                      className={classes.padding}
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
                      InputLabelProps={{ required: true }}
                      onChange={this.handleEmailAddressChange}
                  />
                </Grid>

                <Grid item xs className={classes.root}>
                  <TextField
                      className={classes.padding}
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
                      Sign In
                  </Button>
                </Grid>
                <Grid item xs className="signup-link">
                    Need to create an account? <Link color="primary" to="/signup">Sign Up</Link>
                </Grid>
                </Grid>
                <Grid item md={4}></Grid>
            </Grid>
        );
    }
}


SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);