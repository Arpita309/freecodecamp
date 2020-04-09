 /*eslint-env jquery*/
import React from 'react';
import '../App.css';
class ClipDisplay extends React.Component {
  
    constructor(props)
    {
      super(props);
    }
    
    render()  {
      
      return <div id="display" className="display">{this.props.status}</div>
    }
    
  }
  export default ClipDisplay;