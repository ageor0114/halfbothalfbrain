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
			<p>Create a Literary Masterpiece That Is <b id="lightTan"><i>Half Bot & Half Brain</i></b></p>
			<br/>
			<img src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/hands.jpg?raw=true" id="fullWidth" alt="Portrait"/>
			<div>
	      		<div className="startButton">
	      			<Link to="/madlibs"><Button style={style}>START</Button></Link>
	      		</div>
			</div>
			<br/>
			<p>What is <b><i>Half Bot Half Brain</i></b>?</p>
			<img src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/downarrow.gif?raw=true" id="arrow" alt="Portrait"/>
			</center>
		</section>

		<section id="cardAbout" className="card">
		<center><h1 id="black">About</h1>
		<br/>
		<br/>
		<br/>


 	<div>
		<p className="aboutExplanation"><b><i>Half Bot Half Brain</i></b> is about enhancing a user-provided story.</p>
		<br/>
		<p className="aboutExplanation">It replaces every 'n'th word with a word of the same form of speech </p>
		<p className="aboutExplanation">from a wikipedia exerpt of a chosen topic, essentially creating a MadLib of your own.</p>
    <br/>
		<p className="aboutExplanation">It's a fun and creative way for any writers to</p>
		<p className="aboutExplanation">incorporate machine learning with their own natural voice.</p>
		<p className="aboutExplanation"></p>

		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>


		<img src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/madlib.gif?raw=true" did="fullWidth" alt="Portrait"/>

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
		<center><img class= "img" src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/enoch.jpg?raw=true" id="fullWidth" alt="Portrait"/></center>
		<br/>
		<center><h2>Señior</h2></center>
  </div>
  <div class="column">
    <center><h2>AUSTIN GEORGE</h2></center>
		<br/>
		<center><img class= "img" src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/austin.jpg?raw=true" id="fullWidth" alt="Portrait"/></center>
		<br/>
		<center><h2>juñior</h2></center>
  </div>
  <div class="column">
    <center><h2>GLORIA MOON</h2></center>
		<br/>
		<center><img class= "img" src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/gloria.jpg?raw=true" id="fullWidth" alt="Portrait"/></center>
		<br/>
		<center><h2>Señiorita</h2></center>
  </div>
  <div class="column">
    <center><h2>AARON LEE</h2></center>
		<br/>
		<center><img class= "img" src="https://github.com/ageor0114/nyit-hackathon/blob/master/src/pages/aaron.jpg?raw=true" id="fullWidth" alt="Portrait"/></center>
		<br/>
		<center><h2>Señior</h2></center>
  </div>
</div>
<br/>
<br/>


<center><h1>From</h1></center>
<center><h1>William A. Shine Great Neck South High School</h1></center>


		</section>



	    </div>

	)
    }
};

export default HomePage
