import React, {Component} from 'react'

class FilterParser extends Component{
  constructor(props){
    super(props);
    this.state = {
      input: '',
      blocks: [
        {
          show: true,
          commands: [
            {
              command: "test",
              args: []
            },
            {
              command: "args",
              args: ['test1','test2']
            }
          ]
        }
      ],
    }

    this.process = this.process.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  process(event){
    const re = /^\s/;
    const filter = this.state.input;
    const lines = filter.split('\n');
    var blocks = [];
    lines.forEach((line) => {
      if(!re.test(line)){
        blocks.push({
          show: (line === 'Show'),
          commands: [],
        });
      }else{
        const command = line.trim().split(' ');
        blocks.slice(-1)[0].commands.push({
          command: command[0],
          args: command.slice(1),
        });
      }
    });

    this.setState({
      blocks: blocks
    })
  }

  handleInput(event){
    this.setState({input: event.target.value});
  }

  render(){
    const blocks = this.state.blocks.map((block, index) => {
      return (
        <li key={index}> {block.show ? "Show" : "Hide"}
          <ul>
            {
              block.commands.map((command, index) => {
                return (
                  <li key={index}>
                    {command.command} {command.args.join(' ')}
                  </li>
                );
              })
            }
          </ul>
        </li>
      );
    });

    return (
      <div>
        <h5>Minified Filter Parser</h5>
        <textarea className="u-full-width" rows="12" placeholder="Paste Minified Item Filter Here" value={this.state.input} onChange={this.handleInput}></textarea>
        <button className="button-primary u-full-width" onClick={this.process}>Process</button>
        <ul>
          {blocks}
        </ul>
      </div>
    );
  }
}

export default FilterParser;
