import React, { Component } from "react"

import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

import validate from "validate.js"

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import constraints from "../data/constraints"

const initialState = {
    performingAction: false,
    emailAddress: "",
    password: "",
    passwordConfirmation: "",
    occupation: "",
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
      }
    },
    padding: {
      paddingBottom: '3%'
    }
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
          occupation,
        } = this.state;
    
        const errors = validate(
          {
            emailAddress: emailAddress,
            password: password,
            passwordConfirmation: passwordConfirmation,
            occupation: occupation
          },
          {
            emailAddress: constraints.emailAddress,
            password: constraints.password,
            passwordConfirmation: constraints.passwordConfirmation,
            occupation: constraints.occupation
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
          occupation,
        } = this.state;
    
        if (
          !emailAddress ||
          !password ||
          !passwordConfirmation ||
          !occupation
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

    handleOccupationChange = (event) => {
        const occupation = event.target.value;
    
        this.setState({
          occupation: occupation,
        });
    };

    render() {

        const { classes } = this.props;
        const {
            performingAction,
            emailAddress,
            password,
            passwordConfirmation,
            occupation,
            errors,
        } = this.state;
        return (
            <Grid container>
                <Grid item md={4}></Grid>
                <Grid item md={4} className="signup-box">
                <h3>Create Account</h3>
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
                        InputLabelProps={{ required: false }}
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

            <Grid item xs className={classes.root}>
            <TextField
            className={classes.padding}
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
            </Grid>

            <Grid item xs className={classes.root}>
                <FormControl fullWidth variant="outlined" className={classes.padding}>
                    <InputLabel id="occupation-label">I am a</InputLabel>
                    <Select
                    labelId="occupation-label"
                    id="occupation"
                    value={occupation}
                    onChange={this.handleOccupationChange}
                    label="occupation"
                    >
                    <MenuItem value={"developer"}>Developer</MenuItem>
                    <MenuItem value={"investor"}>Investor</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

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
                </Grid>
                <Grid item md={4}></Grid>
            </Grid>
        );
    }
}



SignUp.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(SignUp);