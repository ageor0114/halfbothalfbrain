import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from 'material-ui/styles';

class HomePage extends React.Component{
	state = {
	}

    render(){
    	const {inputVal, list} = this.state;
    	const style = {
    		background: 'white',
    	}
	return(
	    <div>
	    <center>
		<h1>A Tale Of Two Writers</h1>
		<p>"The Never-Ending Novel That Is Half Brain & Half Bot"</p>
		<div>
			<p id="inline" className="namePrompt">Enter Your Name:</p>
			<div id="inline">
				<TextField 
				style={style}
			    />
      		</div>
		</div>
		<div>
			<p>Pick a Story</p>
		</div>
		<Button>Start</Button>
		</center>
	    </div>

	)
    }
};

export default HomePage
