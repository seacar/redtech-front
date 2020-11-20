import React, { Component } from 'react'

import SignIn from '../components/signin'

const initialState = {
    authenticated: false,
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
      }

    render() {

        const { authenticated } = this.props;

        return (
            <>
            {!authenticated && (
                <SignIn />
            )}
            </>
        )
    }
}

export default Home