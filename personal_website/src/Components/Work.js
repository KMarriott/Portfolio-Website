import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';


class Work extends Component {


	render() {
		return <CSSTransitionGroup
		transitionName="example"
		transitionEnterTimeout={500}
		transitionLeaveTimeout={300}>

		<div className = 'center body' key='Work'>
		<div className='main center work'>
		<br/>
		Checkout my work on Github!:

		<div><a href="https://github.com/KMarriott/">Github</a></div>
		</div>
		</div>

		</CSSTransitionGroup>
	}

}


export default Work