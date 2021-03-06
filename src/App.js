import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import CommentRemover from './CommentRemover';
import FilterParser from './FilterParser';
import Checksum from './Checksum';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router basename="/poe-filter-playground">
        <div className="container">
          <br />
          <h2>POE Item Filter Playground</h2>
          <Link to="/minify">Comment Remover</Link> |&nbsp;
          <Link to="/parser">Filter Parser</Link> |&nbsp;
          <Link to="/checksum">Checksum Calculator</Link> |&nbsp;
          <hr />
          <Switch>
            <Route exact path="/">
              <Redirect to="/minify"/>
            </Route>
            <Route path="/minify" component={CommentRemover}/>
            <Route path="/parser" component={FilterParser}/>
            <Route path="/checksum" component={Checksum}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
