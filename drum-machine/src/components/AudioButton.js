 /*eslint-env jquery*/
import React from 'react';
import '../App.css';
class AudioButton extends React.Component {
  
    constructor(props) {
      super(props)    
    }
    
    render()  {
      
      return (         
          <button id={this.props.title+"-btn"} onClick={() => this.props.drumBtnClicked(this.props.index)} className="drum-pad btn btn-primary audio-btn">
          {this.props.title}
          <audio className="clip" preload="auto" id={this.props.title} src={this.props.source}>
          </audio>
        </button>
      );
    }
  }
  export default AudioButton;