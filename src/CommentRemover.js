import React, {Component} from 'react';
import {minify} from './util'

class CommentRemover extends Component{
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
    }

    this.handleInput = this.handleInput.bind(this);
    this.process = this.process.bind(this);
  }

  handleInput(event){
    this.setState({input: event.target.value});
  }

  process(event){
    const input = this.state.input;

    const strippedInput = minify(input);

    this.setState({output: strippedInput});
  }

  render() {
    return (
      <div>
        <h5>Comment Remover</h5>
        <textarea className="u-full-width" rows="12" placeholder="Paste Item Filter Here" value={this.state.input} onChange={this.handleInput}></textarea>
        <button className="button-primary u-full-width" onClick={this.process}>Process</button>
        <textarea className="u-full-width" rows="12" placeholder="FIlter with comments removed ends up here" value={this.state.output}></textarea>
      </div>
    );
  }
}

export default CommentRemover;
