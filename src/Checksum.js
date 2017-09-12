import React, {Component} from 'react';
import checksum from 'checksum';
import request from 'request';

import {minify} from './util';

class Checksum extends Component{
  constructor(props){
    super(props);

    this.state = {
      body: '',
      url: '',
      rawCS: '',
      minCS: ''
    }

    this.processBody = this.processBody.bind(this);
    this.processRemote = this.processRemote.bind(this);
    this.handleRequestResponse = this.handleRequestResponse.bind(this);
    this.handleBodyInput = this.handleBodyInput.bind(this);
    this.handleURLInput = this.handleURLInput.bind(this);
  }

  processBody(event){
    const body = this.state.body.trim();
    const minified = minify(body);
    const rawCS = checksum(body);
    const minCS = checksum(minified);
    this.setState({rawCS, minCS});
  }

  processRemote(event){
    request(this.state.url, this.handleRequestResponse);
  }

  handleRequestResponse(error, response, body){
    if (!error && response.statusCode == 200) {
      const minified = minify(body.trim());
      const rawCS = checksum(body.trim());
      const minCS = checksum(minified);
      this.setState({rawCS, minCS});
    } else {
      this.setState({
        rawCS: 'Error getting remote filter',
        minCS: 'Error getting remote filter'
      });
    }
  }

  handleBodyInput(event){
    this.setState({body: event.target.value});
  }

  handleURLInput(event){
    this.setState({url: event.target.value});
  }


  render(){
    return(
      <div>
        <h5>Checksum Calculator</h5>
        <div className="row">
          <div className="six columns">
            <textarea className="u-full-width" rows="4" placeholder="Paste body of item filter here" value={this.state.body} onChange={this.handleBodyInput}></textarea>
            <button className="button-primary u-full-width" onClick={this.processBody}>Process Body</button>
          </div>
          <div className="six columns">
            <input className="u-full-width" type="text" placeholder="URL of filter" value={this.state.url} onChange={this.handleURLInput}/>
            <button className="button-primary u-full-width" onClick={this.processRemote}>Process URL</button>
          </div>
        </div>
        <hr />
        <p>Raw Filter Checksum: {this.state.rawCS}</p>
        <p>Minified Filter Checksum: {this.state.minCS}</p>
      </div>
    );
  }
}

export default Checksum
