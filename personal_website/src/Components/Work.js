import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';


class Work extends Component {


	render() {
		return <CSSTransitionGroup
		transitionName="example"
		transitionEnterTimeout={500}
		transitionLeaveTimeout={300}>

		<div className = 'center body' key='Work'>
		<div className='main center work links'>
		<br/>
		<div className= "hvr-float"><a href="https://kmarriott.github.io/DOGame/"> <div className="circle-button linkout">RPG Game</div></a></div>
		<div className= "hvr-float"><a href="https://stormy-taiga-16081.herokuapp.com/"> <div className="circle-button linkout">Virtual Pet</div></a></div>
		

</div>
		</div>

		</CSSTransitionGroup>
	}

}


export default Work