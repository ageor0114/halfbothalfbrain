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
    	//STRING MANIPULATION
		//Precondition: story = Gloria eats chocolate pudding in the dark. On the other hand, Aaron hates cats.
		let output = "Gloria likes figgy pudding in the morning. On the same hand, Aaron hates dogs."
		let newWords = [];

		var words1 = this.state.story.split(" ");
		var words2 = output.split(" ");

    	//PYTHON INTEGRATION
    	var data = {
    		original: this.state.story,
    		modifier: 'With a wicked stepmother (Eleanor Audley) and two jealous stepsisters (Rhoda Williams, Lucille Bliss) who keep her enslaved and in rags, Cinderella (Ilene Woods) stands no chance of attending the royal ball. When her fairy godmother (Verna Felton) appears and magically transforms her reality into a dream come true, Cinderella enchants the handsome Prince Charming at the ball, but must face the wrath of her enraged stepmother and sisters when the spell wears off at midnight.'
    	}
    	var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
		    targetUrl = 'http://halfbothalfbrain.pythonanywhere.com/api/mash';

		var url = targetUrl;

		fetch(url, {
		  method: 'POST', // or 'PUT'
		  body: JSON.stringify(data), // data can be `string` or {object}!
		  headers:{
		    'Content-Type': 'application/json'
		  }
		}).then(res => res)
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => console.error('Error:', error));
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
