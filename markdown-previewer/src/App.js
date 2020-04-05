import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import marked from 'marked';
import './App.css';
const initialstate = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
class App extends Component{
  
    state={
      text:initialstate
    }
    handleChange=(e)=>{
      this.setState({
        text:e.target.value
      })
    }
  
  render(){
    const {text}=this.state;
    const markdown= marked(text,{breaks:true});
    return(
      <div className='container ' >
        <h1 className="text-center m-4" id="heading">Markdown Previewer</h1>
        <div className='row'>
          <div className='col-6'>
            <h5 className="ml-4" id="h2">Enter Your Markdown: </h5>
          <textarea id="editor" value={this.state.text} onChange={this.handleChange}  className="form-control p-2 ml-4"/></div>
          <div className="col-6" >
          <h5 className=" ml-4 " id="h3">Result: </h5>
          <div id="preview" className='preview  rounded ml-4 p-2 form-control' dangerouslySetInnerHTML={{__html:markdown}}/>
          
         
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;
