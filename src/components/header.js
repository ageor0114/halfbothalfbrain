import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//Problem: Bar is not fully sticky

class Header extends React.Component{
    constructor(props){
	super(props);

	this.toggle = this.toggle.bind(this);

	this.state = {
		dropdownOpen: false,
	}
    }

    toggle() {
    	this.setState(prevState => ({
    		dropwdownOpen: !prevState.dropdownOpen
    	}));
    }

    render(){
	return(
	    <div id="fullBar">
		<AppBar style={{boxShadow: 'none', backgroundColor: 'white'}}>
			<div id="barBack">
			<p>
				<Link to="/" id="mainButton">Half Bot Half Brain</Link>
				<AnchorLink id="bar" href='#cardCreators'>Creators</AnchorLink>
	    		<AnchorLink id="bar" href='#cardAbout'>About</AnchorLink>
	    		<AnchorLink id="bar" href="#cardHome">Home</AnchorLink>	    		
	    	</p>
	    	</div>
		</AppBar>

	    </div>
	);
    }
}

export default Header;