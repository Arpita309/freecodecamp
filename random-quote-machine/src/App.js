import React,{Component} from 'react';
import {random} from 'lodash';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import QuoteMachine from './Components/quoteMachine';
const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  }
};
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      quotes:[],
      selectedQuoteIndex:''
    }
    this.assignNewQuoteIndex=this.assignNewQuoteIndex.bind(this);
    this.selectQuoteIndex=this.generateNewQuoteIndex.bind(this);
  }
  componentDidMount(){
    fetch('https://type.fit/api/quotes')
    .then(data=>data.json())
    .then(quotes=>this.setState({quotes},this.assignNewQuoteIndex))
  }
  get selectedQuote(){
    if(!this.state.quotes.length||!Number.isInteger(this.state.selectQuoteIndex))
    {
      return undefined;
    }
    return this.state.quotes(this.state.selectedQuoteIndex);
  }
  assignNewQuoteIndex(){
    this.setState({selectedQuoteIndex:this.generateNewQuoteIndex()})
  }
  generateNewQuoteIndex(){
    if(!this.state.quotes.length){
      return;
    }
    return random(0,this.state.quotes.length-1)
  }
  render(){
    
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
      <Grid xs={11} lg={8} item>
        {
          this.selectedQuote?
          <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} /> 
          :null
          
        }
      </Grid>
    </Grid>
    );
  }
  
}

export default withStyles(styles)(App);
