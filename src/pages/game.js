import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const shelterBox={
  padding: '1em 2em',
  margin: '5em',
  fontFamily: 'Lora',
  textDecoration: 'none',
}

class GamePage extends React.Component{
  state = {
		list: [],
		inputVal: '',
    story: '',
    showButton: false,
    isOver: false,
	}

  onClickEnd = () => {
    this.setState(prevState => {
      let newState = prevState;
      newState.isOver = true;
      return newState;
    });
  }

	handleSubmit = (e) => {
	  e.preventDefault();
    this.setState(prevState => {
      let newStory = prevState.story + ' ' + prevState.inputVal;
      let newState = prevState;
      newState.list = [...this.state.list, this.state.inputVal];
      newState.inputVal = '';
      newState.story = newStory;
      //console.log("input: " + prevState.story.charAt(prevState.story.length-1));
      //console.log(prevState.story.charAt(prevState.story.length-1) === '.');
      //console.log('.');
      if (prevState.story.charAt(prevState.story.length-1) === '.'){
        this.state.showButton = true;
      }
      return newState;
    });
	}

	handleChange = e => {
	    this.setState({inputVal: e.target.value});
	}

	textChangeHandler(event)  {
		//this.setState({ chatInput: event.target.value });
		this.setState(prevState => {
	      let newState = prevState;
	      newState.chatInput = event.target.value;
	      return newState;
	    });
	}

	handleChange(name) {
		console.log(name);
	}

    render(){
    	const {inputVal, list, story, onClickEnd, showButton, isOver} = this.state;
	return(
	    <div>
		{!this.state.isOver &&
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <p>
  		    Welcome to the game!
  		</p>
  		<form onSubmit={this.handleSubmit}>
  			<input type="text"
  	          onChange={this.handleChange}
  	          value={inputVal}
  	          placeholder="Write a line ..."
  	          required />
  		</form>
      <p>{this.state.story}</p>
      {this.state.showButton && <button onClick={this.onClickEnd}>End Game</button>}
    </div>}
    {this.state.isOver &&
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>Thanks for playing, hope you had fun!</p>

      <Paper style={shelterBox} elevation={5}>
        <Typography variant="headline" gutterBottom>
          <u><b>Here's the final story:</b></u>
        </Typography>
        <br/>
        <Typography variant="subheading" gutterBottom>
        <div id="finalStory">{this.state.story}</div>
        </Typography>
    </Paper>
      </div>}

	    </div>
	)
    }
}

export default GamePage
