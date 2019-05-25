import React from 'react';
import TextField from '@material-ui/core/TextField';

class HomePage extends React.Component{
	state = {
		list: [],
		inputVal: '',
	}

	handleSubmit = (e) => {
	  e.preventDefault();
	  this.setState({
	    list: [...this.state.list, this.state.inputVal],
	    inputVal: '',
	  })
	}

	handleChange = e => {
	    this.setState({inputVal: e.target.value});
	}

	textChangeHandler(event)  {
		//this.setState({ chatInput: event.target.value });
		this.setState(prevState => {
	      let newState = prevState;
	      newState.chatInput = event.target.value;
	      return newState;
	    });
	}

	handleChange(name) {
		console.log(name);
	}

    render(){
    	const {inputVal, list} = this.state;
	return(
	    <div>
		<p>
		    Welcome to the boiler plate
		</p>
		<form onSubmit={this.handleSubmit}>
			<input type="text"
	          onChange={this.handleChange}
	          value={inputVal}
	          placeholder="Write a line ..."
	          required />
		</form>
		{
          list.map(item => <p>{item}</p>)
        }
	    </div>
	)
    }
};

export default HomePage
