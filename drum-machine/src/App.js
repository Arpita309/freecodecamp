
import React from 'react';
import ClipDisplay from'./components/ClipDisplay';
import AudioButton from './components/AudioButton'
import './App.css';
import $ from 'jquery';
const buttonsList = [{
  title:"Q",detail:"Heater-1",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
},{
  title:"W",detail:"Heater-2",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
},{
  title:"E",detail:"Heater-3",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
},{
  title:"A",detail:"Heater-4",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
},{
  title:"S",detail:"Clap",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
},{
  title:"D",detail:"Open-HH",source:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
},{
  title:"Z",detail:"Kick-n'-Hat",source:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
},{
  title:"X",detail:"Kick",source:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
},{
  title:"C",detail:"Closed-HH",source:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}];






class App  extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.drumBtnClicked = this.drumBtnClicked.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = {
      status:"Display"
    }
  }
  
  componentDidMount() {
    document.addEventListener("keydown",this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown",this.handleKeyPress);
  }
  
  handleKeyPress(event) {
    const pressedKey = String.fromCharCode(event.keyCode)+"-btn";
    $("#"+pressedKey).addClass("buttonActiveColor");    
    setTimeout(function(){          
        $("#"+pressedKey).removeClass("buttonActiveColor");    

    },200);
    $("#"+pressedKey).click();
  }
  
  drumBtnClicked(index)  {
    
    var valueItem = buttonsList[index];    
    var audio = $("#"+valueItem.title)[0];
    audio.play();
    this.setState({
      status:valueItem.detail
    });
  }
  
  render()  {
    var that = this;    
    const items = buttonsList.map(function(value, index){
      return <AudioButton drumBtnClicked={ that.drumBtnClicked} title={value.title} index={index} source={value.source}/>
    });
    
   return <div id="drum-machine" className="mainContainer "> 
     <ClipDisplay status={this.state.status}/>        
      {items} 
     </div>; 
  }
}
export default App;

