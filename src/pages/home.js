import React, { Component } from 'react'

import Header from '../components/header'
import Splash from '../components/splash'

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
                <Splash />
            )}
            {authenticated && (
                <Header />
            )}
            </>
        )
    }
}

export default Home