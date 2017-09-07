import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import CommentRemover from './CommentRemover';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router basename="/poe-filter-playground">
        <div className="container">
          <br />
          <h2>POE Item Filter Playground</h2>
          <Link to="/minify">Comment Remover</Link> | 
          <hr />
            <Route exact path="/">
              <Redirect to="/minify"/>
            </Route>
            <Route path="/minify" component={CommentRemover}/>

        </div>
      </Router>
    );
  }
}

export default App;
