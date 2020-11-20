import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import Header from './components/header'

import Home from './pages/home'
import SignUp from './pages/signup'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0264B0',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariant: false
  }
})

function App() {
  return (
    <div className="app-wrapper">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
