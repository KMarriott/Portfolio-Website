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
		More Information:

		Email Linkedin Github Resume 

		</div>

		</div>
		</CSSTransitionGroup>
	}

}


export default Contact