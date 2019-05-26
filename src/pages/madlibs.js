import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import AddIcon from '@material-ui/icons/Add';


class MadLibs extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			story: '',
			story2: '',
			show2: false,
			submitted: false,
			output: '',
		}
	    this.handleChange = this.handleChange.bind(this);
	    this.handleChange2 = this.handleChange2.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.addButton = this.addButton.bind(this);
    	this.enhanceStory = this.enhanceStory.bind(this);
	}

	handleSubmit(){
		console.log('submit');
	}

	handleChange(event) {
    this.setState({story: event.target.value});
    console.log(this.state.story);
  	}

  	handleChange2(event) {
  	this.setState({story2: event.target.value});
    console.log(this.state.story2);
  	}

  	addButton(){
  		console.log("we in");
  		this.setState({show2: true});
  	}

    enhanceStory(){
    	this.setState({submitted:true});
    	//STRING MANIPULATION
		//Precondition: story = Gloria eats chocolate pudding in the dark. On the other hand, Aaron hates cats.
		let output = "Gloria likes figgy pudding in the morning. On the same hand, Aaron hates dogs."
		let newWords = [];

		var words1 = this.state.story.split(" ");
		var words2 = output.split(" ");

    	//PYTHON INTEGRATION
    	var data = {
    		original: this.state.story,
    		modifier: this.state.story2
    	}
    	var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
		    targetUrl = 'http://halfbothalfbrain.pythonanywhere.com/api/mash';

		//var url = proxyUrl+targetUrl;
		var url = 'http://localhost:5000/api/mash';

		fetch(url, {
		  method: 'POST', // or 'PUT'
		  body: JSON.stringify(data), // data can be `string` or {object}!
		  headers:{
		    'content-type': 'application/json'
		  }
		})
        .then(response => response.json())
        .then((body) => {
            console.log(body.result);
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
			<h1>A Tale of Two Writers</h1>
			{!this.submitted && <div>
			<p>Write your own story or take an excerpt from online. When you're ready, press the button and let our robotic author do the rest ...</p>
			<br/>
					<form onSubmit={this.handleSubmit}>
					<div>
						<textarea id="inline" value={this.state.story} className="madPrompt" type="text" onChange={this.handleChange}  placeholder="Enter A Story" />
						<div id="inline">
							{/*!this.show2 && <button type="button" onClick={this.state.addButton} className="circleButton">+</button>*/}
						</div>
						<textarea id="inline" value={this.state.story2} className="madPrompt" type="text" onChange={this.handleChange2}  placeholder="Enter Another Story OR Leave it Blank to Let Our Robot Do The Rest" />
						<div id="inline">
							{this.show2 && <Button>DELETE</Button>}
						</div>
					</div>
					<br/>
					<br/>
				    </form>
				    <button className="madButton" onClick={this.enhanceStory}>Compose My Story</button>
			</div>}
			{this.submitted && <div>
				<h1>Your Story</h1>

				<div id="madPrompt"><p>{this.state.output}</p></div>
				</div>}
			</center>
	    </div>

	)
    }
};

export default MadLibs
