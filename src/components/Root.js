import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Login from './Login';

import App from './App'
import theme from '../config/Theme'

const muiTheme = getMuiTheme(theme)

const Root = () => (
  <Router>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={App} />
      </Switch>
    </MuiThemeProvider>
  </Router>
)

export default Root
