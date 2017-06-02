import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class About extends Component {


	render() {
		return <CSSTransitionGroup
		transitionName="example"
		transitionEnterTimeout={500}
		transitionLeaveTimeout={300}>

		<div className = 'center body'>
		<div className='main center '>
		<br/>
		About page.
		</div>
		</div>

		</CSSTransitionGroup>
	}

}


export default About