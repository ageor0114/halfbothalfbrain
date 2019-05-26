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
	    //<br/>
	   // <br/>
	    <section id="cardHome" className="card">
		    <center>
			<h1>"A Tale Of Two Writers"</h1>
			<p>Create a Literary Masterpiece That Is <b id="lightTan"><i>Half Bot & Half Brain</i></b></p>
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
			<p>What is <b><i>Half Bot Half Brain</i></b>?</p>
			<img src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/downarrow.gif?raw=true" did="fullWidth" alt="Portrait"/>
			</center>
		</section>

		<section id="cardAbout" className="card">
		<center><h1 id="black">About</h1>
		<br/>

 	<div>
		<p className="aboutExplanation"><b><i>Half Bot Half Brain</i></b> is about enhancing a user-provided story.</p>
		<br/>
		<p className="aboutExplanation">It replaces every <b><i>n</i></b>th word with a word of the same form of speech from wikipedia exerpt of a chosen topic.</p>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>


		<img src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/Madlib.gif?raw=true" did="fullWidth" alt="Portrait"/>

 </div>

		</center>
		</section>

		<section id="cardCreators" className="card">
				<center><h1>Creators</h1></center>

				<br/>
				<br/>
				<br/>

<div class="row">
  <div class="column">
    <center><h2>ENOCH CHEN</h2></center>
		<br/>
		<center><img src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/enoch.jpg?raw=true" id="fullWidth" alt="Portrait"/></center>
  </div>
  <div class="column">
    <center><h2>AUSTIN GEORGE</h2></center>
		<br/>
		<center><img src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/austin.jpg?raw=true" id="fullWidth" alt="Portrait"/></center>
  </div>
  <div class="column">
    <center><h2>GLORIA MOON</h2></center>
		<br/>
		<center><img src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/gloria.jpg?raw=true" id="fullWidth" alt="Portrait"/></center>
  </div>
  <div class="column">
    <center><h2>AARON LEE</h2></center>
		<br/>
		<center><img src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/aaron.jpg?raw=true" id="fullWidth" alt="Portrait"/></center>
  </div>
</div>
		</section>
	    </div>
	)
    }
};

export default HomePage
