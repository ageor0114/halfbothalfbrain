import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const shelterBox={
  padding: '1em 2em',
  margin: '5em',
  fontFamily: 'Lora',
  textDecoration: 'none',
  height: '800px',
}

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

	handleChange(event){
        this.setState({story: event.target.value});
  	}

  	handleChange2(event) {
        this.setState({story2: event.target.value});
  	}

  	handleChangeX(event) {
  	this.setState({show2: event.target.value});
    console.log(this.state.show2);
  	}

  	addButton(){
  		this.setState({show2: true});
  	}



    enhanceStory(){
    	//STRING MANIPULATION
		//Precondition: story = Gloria eats chocolate pudding in the dark. On the other hand, Aaron hates cats.
		let output = "Gloria likes figgy pudding in the morning. On the same hand, Aaron hates dogs."
		let newWords = [];
		console.log('story' + this.state.story);
			var array1 = this.state.story.split(" ");
			var array2 = output.split(" ");
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

    	//PYTHON INTEGRATION
    	var data =
        {
    		original: this.state.story,
    		modifier: this.state.story2,
            craziness: 100
    	}

		var url = 'https://py-mashup.herokuapp.com/api/mash';

        console.log(data);
		fetch(url, {
		  method: 'POST', // or 'PUT'
		  body: JSON.stringify(data), // data can be `string` or {object}!
		  headers:{
		    'content-type': 'application/json'
		  }
		})
        .then(response => response.json())
        .then((body) => {
			    	this.setState({submitted:true});
						this.setState({output:body.result});
            //console.log(body.result);
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
            
			{this.state.submitted && <div>
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
	          <u><b>Your Story:</b></u>
	        </Typography>
	        <br/>
	        <Typography variant="subheading" gutterBottom>
	        <div class= "finalStory" id="madPrompt">{this.state.output}<span>|</span></div>
	        </Typography>
	    </Paper>
				</div>}
			{<div>
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
				    <div>
				    	<button id="inline" className="madButton" onClick={this.enhanceStory}>Compose My Story</button>
				    	<p id="inline">Enhance 1 Story</p>
				    	<div id="inline">  <Switch disabled
					        checked={this.state.show2}
					        onChange={this.handleChangeX}
					        value="show2"
					        color="primary"
					      /></div>
				    	<p id="inline">Combine 2 Stories</p>
				    </div>
			</div>}
			</center>
	    </div>
	)
    }
};
export default MadLibs
