import React from "react"
import "./App.css"
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProfilePage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}
export default App
