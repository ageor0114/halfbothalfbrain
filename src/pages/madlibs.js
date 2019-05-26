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
	    <br/>
	    <br/>
		    <center>
			<h1>Robotic Mad Libs</h1>
			<p>Enter your own story and let our robotic author do the rest ...</p>
			<br/>
					<form onSubmit={this.handleSubmit}>
					<input className="madPrompt" type="text" onChange={(e)=>{this.onChange(e)}} placeholder="Enter Your Story" value={this.state.name}/>
					<br/>
					<br/>
					<button className="madButton">Enhance My Story</button>
				    </form>
			</center>
	    </div>

	)
    }
};

export default MadLibs
