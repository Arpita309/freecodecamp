import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import '../App.css'


const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Card id='card'>
    <CardContent>
      <Typography id="text">
        {selectedQuote.quote}
        <div>
         <span id="author"> - {selectedQuote.author}</span>
        </div>
        
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton
        id="tweet-quote"
        target="_blank"
        href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`)}
      >
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
      </IconButton>
      <IconButton
        id="tumblr"
        target="_blank"
        href={encodeURI(`https://tumblr.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`)}
      >
        <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon>
      </IconButton>
      
      
    </CardActions>
    <Button id="new-quote" size="small" onClick={assignNewQuoteIndex} >Next Quote</Button>
  </Card>
);

export default QuoteMachine