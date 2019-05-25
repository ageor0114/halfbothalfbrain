import React from 'react';
import TextField from '@material-ui/core/TextField';






class GamePage extends React.Component{
  state = {
		list: [],
		inputVal: '',
    story: '',
	}

	handleSubmit = (e) => {
	  e.preventDefault();
    this.setState(prevState => {
      let newStory = prevState.story + ' ' + prevState.inputVal;
      let newState = prevState;
      newState.list = [...this.state.list, this.state.inputVal];
      newState.inputVal = '';
      newState.story = newStory;
      return newState;
    });
    console.log(this.state.story);
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
    	const {inputVal, list, story} = this.state;
	return(
	    <div>
		<p>
		    Welcome to the game page
		</p>
		<form onSubmit={this.handleSubmit}>
			<input type="text"
	          onChange={this.handleChange}
	          value={inputVal}
	          placeholder="Write a line ..."
	          required />
		</form>
    <p>{this.state.story}</p>

	    </div>
	)
    }
}

export default GamePage
