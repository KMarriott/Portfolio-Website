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
				// about_hover: false,
				// contact_hover: false,
			});
			console.log('work');
		}

		this.revealAbout = function(e) {
			this.setState({
				// work_hover: false,
				about_hover: true,
				// contact_hover: false,
			});
			console.log('about');
		}

		this.revealContact = function(e) {
			this.setState({
				// work_hover: false,
				// about_hover: false,
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

		<About/>
		
		<div className="App-logo">
		*
		</div>


		<div className="description">

		I am team focused and work well with others. I’m easy going, understanding, and emotionally mature when faced with difficulties. I am reliable and honest and accountable to my mistakes. When faced with problems, I work to ensure things work as smoothly as possible. As a creative mind my goal is to find and create solutions to problems I find to make a better environment for everyone I work with. 


		</div>
		
		<Contact/>

		<div className="select">
		
		<div className="work-button nav-select" 
		onMouseEnter={this.revealWork}
		>
		<div className="revealbutton">WORK</div>
		</div>

		</div>	
		<div>
		</div>

		
		{this.state.work_hover ? (<Work/>) : " "}
		
		</div>
		</div>


	}
}



export default Profile