import React from 'react'
import '../assets/style/main.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './Main'
import store from '../store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
