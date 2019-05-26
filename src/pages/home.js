import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
	state = {
		name: '',
	}

	handleSubmit(){
		console.log('submit');
	}

	onChange(e){
		this.setState(prevState => {
			let newState = prevState;
			newState.name = e.target;
			return newState;
		})
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
	    <section id="cardHome" className="card">
		    <center>
			<h1>A Tale Of Two Writers</h1>
			<p>The Never-Ending Novel That Is <b id="lightTan"><i>Half Bot & Half Brain</i></b></p>
			<br/>
			<img src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/hands.jpg?raw=true" id="fullWidth" alt="Portrait"/>
			
			<div>
				<div id="inline">
					<form onSubmit={this.handleSubmit}>
					<input className="namePrompt" type="text" onChange={(e)=>{this.onChange(e)}} placeholder="Enter Your Name" value={this.state.name}/>
				    </form>
	      		</div>
	      		<div className="startButton" id="inline">
	      			<Button style={style}>START</Button>
	      		</div>
			</div>
			</center>
		</section>
		<section id="cardAbout" className="card">
				<center><h1 id="black">About</h1></center>
		</section>
		<section id="cardCreators" className="card">
				<center><h1>Creators</h1></center>
		</section>
	    </div>

	)
    }
};

export default HomePage
