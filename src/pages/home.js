import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from 'material-ui/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
    		height: 60,
    		fontSize: 20,
    		borderRadius: 0,
    		width: 180,
    	}
	return(
	    <div>
	    <br/>
	    <br/>
	    <section id="cardHome" className="card">
		    <center>
			<h1>A Tale Of Two Writers</h1>
			<p>Create a Literary Masterpiece That Is Both <b id="lightTan">Half Bot & Half Brain</b></p>
			<br/>
			<img src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/hands.jpg?raw=true" id="fullWidth" alt="Portrait"/>
			
			<div>
	      		<div className="startButton" id="inline">
	      			<Link to="/madlibs"><Button style={style}>CREATE</Button></Link>
	      		</div>
			</div>
			<br/>
			<p>What is <b id="lightTan"><i>Half Bot Half Brain</i></b>?</p>
			<AnchorLink href='#cardAbout'><img width="40" height="40" src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/downarrow.gif?raw=true" alt="arrow"/></AnchorLink>
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
