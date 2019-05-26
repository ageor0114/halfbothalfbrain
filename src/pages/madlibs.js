import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

class MadLibs extends React.Component{
	state = {
		story: '',
	}

	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
	}
	handleSubmit(){
		console.log('submit');
	}

	onChange(value){

		this.setState(prevState => {
			//console.log('*'+"bob");
			let newState = prevState;
			newState.story = 'bob';
			return newState;
		})
		console.log(this.state.story);
	}

    enhanceStory(e){
    	e.preventDefault();
			//Precondition: story = Gloria eats chocolate pudding in the dark. On the other hand, Aaron hates cats.
			let output = "Gloria likes figgy pudding in the morning. On the same hand, Aaron hates dogs."
			let newWords = [];
console.log('story' + this.state.story);
			var array1 = this.state.story.split(" ");
			var array2 = output.split(" ");
			console.log(1);
			console.log('array1');
			console.log(2);
			console.log('array2');
			var differences = [];

			var temp = [];

			array1 = array1.toString().split(',').map(Number);
			array2 = array2.toString().split(',').map(Number);

			for (var i in array1) {
				if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
			}
			for(i in array2) {
				if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
			}
			differences = temp.sort((a,b) => handsome Prince Charming at the ball, but must face the wrath of her enraged stepmother and sisters when the spell wears off at midnight.'
    	}
    	var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
		    targetUrl = 'http://halfbothalfbrain.pythonanywhere.com/api/mash';

		var url = 'https://py-mashup.herokuapp.com/api/mash';

		fetch(url, {
		  method: 'POST', // or 'PUT'
		  body: JSON.stringify(data), // data can be `string` or {object}!
		  headers:{
		    'content-type': 'application/json'
		  }
		})
        .then(response => response.json())
        .then((body) => {
            console.log(body);
        })
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
					<textarea className="madPrompt" type="text" onChange={(e) => this.onChange(e)} placeholder="Enter Your Story" value={this.state.story}/>
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
