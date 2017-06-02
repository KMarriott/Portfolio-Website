import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Work from './Work.js';
import About from './About.js';
import Contact from './Contact.js';

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
		<div className='container'>

		<div className='name center'> Khem Marriott</div>

		<div className="select">
		
		<div className="work-button nav-select" 
		onMouseEnter={this.revealWork}
		>WORK
		</div>

		<div className="about-button nav-select" 
		onMouseEnter={this.revealAbout}
		>ABOUT
		</div>

		<div className="contact-button nav-select" 
		onMouseEnter={this.revealContact}
		>CONTACT		
		</div>
		</div>	
		<div>
		</div>

		{this.state.work_hover ? (<Work/>) : " "}	
		{this.state.about_hover ? (<About/>) : " "}
		{this.state.contact_hover ? (<Contact/>) : " "}

		</div>
		</div>


	}
}



export default Profile