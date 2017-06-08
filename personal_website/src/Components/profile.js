import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Work from './Work.js';
import Traits from './traits.js';
import Contact from './Contact.js';
import About from './About.js';


class Profile extends Component {

	constructor(){
		super();

		this.state={
			work_hover: false,
			about_hover: false,
			contact_hover: false,
			items: ['hello', 'world', 'click', 'me']
		}

		this.handleAdd = this.handleAdd.bind(this);

		this.revealWork = function(e) {
			this.setState({
				work_hover: true,
				about_hover: false,
				contact_hover: false,
			});
			console.log('work');
		}

		this.revealAbout = function(e) {
			this.setState({
				work_hover: false,
				about_hover: true,
				contact_hover: false,
			});
			console.log('about');
		}

		this.revealContact = function(e) {
			this.setState({
				work_hover: false,
				about_hover: false,
				contact_hover: true,
			});
			console.log('contact');
		}

		this.revealWork = this.revealWork.bind(this)
		this.revealAbout = this.revealAbout.bind(this)
		this.revealContact = this.revealContact.bind(this)
	}


	handleAdd() {
		const newItems = this.state.items.concat([
			prompt('Enter some text')
			]);
		this.setState({items: newItems});
	}

	handleRemove(i) {
		let newItems = this.state.items.slice();
		newItems.splice(i, 1);
		this.setState({items: newItems});
	}



	render() {

		return <div className='center'>

		<Traits/>
		
		<div className="box select">
		</div>
		



		<div className="select">

	<div className="App-logo">
		*
		</div>

		<div className= "hvr-float">
		<div
		className="circle-button nav-select" 
		onClick={this.revealAbout}>
		
		<div className="revealbutton hvr-float">ABOUT</div>
		

		</div>


		</div>

		<div className= "hvr-float">
		
		<div
		className="circle-button nav-select" 
		onClick={this.revealWork}>
		

		<div className="revealbutton hvr-float">WORK</div>
		

		</div>
		</div>

		<div className= "hvr-float">
		
		<div
		className="circle-button nav-select" 
		onClick={this.revealContact}>
		

		<div className="revealbutton hvr-float">CONTACT</div>
		

		</div>
		</div>



	<div className="App-logo">
		*
		</div>

		</div>	



		<div>

		<br/>
		{this.state.about_hover ? (<About/>) : " "}
		{this.state.work_hover ? (<Work/>) : " "}
		{this.state.contact_hover ? (<Contact/>) : " "}

		</div>



		</div>


	}



}



export default Profile