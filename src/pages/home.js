import React, { Component } from 'react'

import Header from '../components/header'

import Splash from '../components/splash'
import RedTech from '../components/redtech'

const initialState = {
    authenticated: false
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
            {authenticated && (
                <Splash />
            )}
            {!authenticated && (
                <div className="container">
                    <Header />
                    <RedTech />
                </div>
            )}
            </>
        )
    }
}

export default Home