import React from 'react'
import '../assets/style/main.scss'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from '../store'
import { Provider } from 'react-redux'
import Home from './home/Index'
import Alert from './general/Alert'
import { ReactComponent as LogoTexto } from '../assets/svg/logo-texto.svg'

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <LogoTexto />
      </div>
      <Provider store={store}>
        <Alert />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
