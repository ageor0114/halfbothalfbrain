import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

class MadLibs extends React.Component{
	state = {
		story: '',
	}

	handleSubmit(){
		console.log('submit');
	}

	onChange(e){
		this.setState(prevState => {
			let newState = prevState;
			newState.story = e.target;
			return newState;
		})
	}

    enhanceStory(e){
    	e.preventDefault();
			//Precondition: story = Gloria eats chocolate pudding in the dark. On the other hand, Aaron hates cats.
			let output = "Gloria likes figgy pudding in the morning. On the same hand, Aaron hates dogs."
			let newWords = [];

			var words1 = this.state.story.split(" ");
			var words2 = output.split(" ");

    }

    render(){
    	const {inputVal, list} = this.state;
    	const style = {
    		background: '#ffc9a8',
    		height: 74,
    		fontSize: 20,
    		borderRadius: 0,
    	}

	return(
	    <div>
	    <br/>
	    <br/>
	    <br/>
	    <br/>
		    <center>
			<h1>Robotic Mad Libs</h1>
			<p>Write your own story or take an excerpt from online. When you're ready, press the button and let our robotic author do the rest ...</p>
			<br/>
					<form onSubmit={this.handleSubmit}>
					<textarea className="madPrompt" type="text" onChange={(e)=>{this.onChange(e)}} placeholder="Enter Your Story" value={this.state.story}/>
					<br/>
					<br/>
					<button className="madButton" onClick={(e) => {this.enhanceStory(e)}}>Enhance My Story</button>
				    </form>
			</center>
	    </div>

	)
    }
};

export default MadLibs
