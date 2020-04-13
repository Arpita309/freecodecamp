import React from 'react';
import './App.css';

const Header = () => <h1 id='header'>Pomodoro Clock</h1>

const SetTimer = ({ type, label, value, handleClick }) => (
  <div className='SetTimer'>
    <div id={`${type}-label`}>{label}</div>
      <div className='SetTimer-controls'>
      <button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)}>&darr;</button>
      <h1 id={`${type}-length`}>{value}</h1>
      <button id={`${type}-increment`} onClick={() => handleClick(true, `${type}Value`)}>&uarr;</button>
    </div>
  </div>
)

const Timer = ({ mode, time }) => (
  <div className='Timer'>
    <h1 id='timer-label'>{mode === 'session' ? 'Session ' : 'Break '}</h1>
    
    <h1 id='time-left'>{time}</h1>
  </div>
)

const Controls = ({ active, handleReset, handlePlayPause }) => (
  <div className='Controls'>
    <button id='start_stop' onClick={handlePlayPause}>{ active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span> }</button>
    <button id='reset' onClick={handleReset}>&#8635;</button>
  </div>
)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      breakValue: 5,
      sessionValue: 25,
      time: 25 * 60 * 1000,
      active: false,
      mode: 'session'
    }
  }
  
  componentDidUpdate(prevProps) {
    if(this.state.time === 0 && this.state.mode === 'session') {
      this.setState({ time: this.state.breakValue * 60 * 1000, mode: 'break' })
      this.audio.play()


    }
    if(this.state.time === 0 && this.state.mode === 'break') {
      this.setState({ time: this.state.sessionValue * 60 * 1000, mode: 'session' })
      this.audio.play()
      

    } 
  }
 millisToMinutesAndSeconds(time) {
    var minutes = Math.floor(time / 60000);
    var seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  
  handleSetTimers = (inc, type) => {
    if (inc && this.state[type] === 60) return
    if (!inc && this.state[type] === 1) return
    this.setState({ [type]: this.state[type] + (inc ? 1 : -1) })
  }
  
  handlePlayPause = () => {
    if (this.state.active) {
      this.setState({ active: false }, () => clearInterval(this.pomodoro))
    } 
    else {
      if (!this.state.touched) {
        this.setState({ 
          time: this.state.sessionValue * 60 * 1000, 
          active: true, 
          touched: true }, () => this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1000 }) ,1000)
        )} else {
            this.setState({
              active: true,
              touched: true
            }, () => this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1000 }) ,1000))
        }
    }
  }
  
  handleReset = () => {
    this.setState({ 
      breakValue: 5, 
      sessionValue: 25, 
      time: 25 * 60 * 1000, 
      active: false, 
      mode: 'session',
      touched: false
    })
    this.audio.pause()
    this.audio.currentTime = 0
    clearInterval(this.pomodoro)
  }
  
  render(){
    return(
    <div>
      <Header/>
      <div className='settings'>
        <SetTimer 
          type='break' 
          label='Break Length' 
          value={this.state.breakValue}
          handleClick={this.handleSetTimers}
        />
        <SetTimer 
          type='session' 
          label='Session Length' 
          value={this.state.sessionValue}
          handleClick={this.handleSetTimers}  
        />
      </div>
      <Timer mode={this.state.mode} time={this.millisToMinutesAndSeconds(this.state.time)}/>
      <Controls active={this.state.active} handleReset={this.handleReset} handlePlayPause={this.handlePlayPause}/>
      <audio 
        id='beep'
        src='https://s3-us-west-1.amazonaws.com/benjaminadk/Data+synth+beep+high+and+sweet.mp3' 
        ref={ref => this.audio = ref}>
      </audio>
    </div>
    );
  }
}

export default App;