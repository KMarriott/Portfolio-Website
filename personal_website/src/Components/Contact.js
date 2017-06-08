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
		<div className= "hvr-float"><a href="mailto:khemmarriott@gmail.com"> <div className="circle-button linkout">Email!</div></a></div>
		<div className= "hvr-float"><a href="https://www.linkedin.com/in/khemmarriott/"> <div className="circle-button linkout">Linkedin!</div></a></div>
		<div className= "hvr-float"><a href="https://github.com/kmarriott"> <div className="circle-button linkout">Github!</div></a></div>
		

		{
			// <div className="hvr-float linkout"><a href="KhemMarrottResume.pdf">Resume</a></div> 
		}
		</div>





		</div>

		</div>
		</CSSTransitionGroup>
	}

}


export default Contact