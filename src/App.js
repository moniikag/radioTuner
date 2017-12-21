import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import './App.css'

import RadioStations from './components/RadioStations'
import SingleStation from './components/SingleStation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Radio Tuner</h1>
        </header>

        <Router>
          <article className="main-article">
            <Switch>
              <Route path="/station/:id" component={SingleStation}/>
              <Route path="/" component={RadioStations}/>
            </Switch>
          </article>
        </Router>
      </div>
    );
  }
}

export default App;
