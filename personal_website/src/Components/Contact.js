import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './general.css';
import './css/hover.css';


class Contact extends Component {


	render() {

		return <CSSTransitionGroup
		transitionName="example"
		transitionEnterTimeout={500}
		transitionLeaveTimeout={300}>

		<div className = 'center body'>
		<div className='main center'>

		<div className="links">
		<div className="hvr-float linkout"><a href="">Email</a></div>
		<div className="hvr-float linkout"><a href="https://www.linkedin.com/in/khemmarriott/">Linkedin</a></div>
		<div className="hvr-float linkout"><a href="https://github.com/kmarriott">Github</a></div>
		<div className="hvr-float linkout"><a href="">Resume</a></div> 
		</div>



		</div>

		</div>
		</CSSTransitionGroup>
	}

}


export default Contact