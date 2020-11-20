import React, { Component } from 'react'

import SignUp from '../components/signup'
import SignIn from '../components/signin'

class Home extends Component {

    render() {
        return (
            <>
                <SignUp />
                <SignIn />
            </>
        )
    }
}

export default Home