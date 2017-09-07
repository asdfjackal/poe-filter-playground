import React, {Component} from 'react';

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
    const re = /^(.*?)\s*#.*$/;

    const input = this.state.input;
    const inputLines = input.split('\n');
    console.log(inputLines);
    const strippedInput = inputLines.filter((line) => {
      return !(line.startsWith('#'));
    }).filter((line) => {
      return line;
    }).map((line) => {
      let match = line.match(re);
      if(match === null){
        return line;
      }else{
        return match[1];
      }
    });

    this.setState({output: strippedInput.join('\n')});
  }

  render() {
    return (
      <div>
        <h5>POE Loot Filter Comment Remover</h5>
        <textarea className="u-full-width" rows="12" placeholder="Paste Loot Filter Here" value={this.state.input} onChange={this.handleInput}></textarea>
        <button className="button-primary u-full-width" onClick={this.process}>Process</button>
        <textarea className="u-full-width" rows="12" placeholder="FIlter with comments removed ends up here" value={this.state.output}></textarea>
      </div>
    );
  }
}

export default CommentRemover;
