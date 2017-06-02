import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Contact extends Component {


	render() {

		return <CSSTransitionGroup
		transitionName="example"
		transitionEnterTimeout={500}
		transitionLeaveTimeout={300}>

		<div className = 'center body'>
		<div className='main center'>
		<br/>
		Contact page.
		<div><a href="https://github.com/KMarriott/">Github</a></div>
		<div><a href="https://www.linkedin.com/in/khemmarriott/">Linkedin</a>
		</div>

		</div>

		</div>
		</CSSTransitionGroup>
	}

}


export default Contact