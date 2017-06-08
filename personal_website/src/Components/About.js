import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';


class About extends Component {


	render() {
		return <CSSTransitionGroup
		transitionName="example"
		transitionEnterTimeout={500}
		transitionLeaveTimeout={300}>

		<div className = 'center body' key='About'>
		<div className='main center work'>


		<div className="description">

		Team Focused, Intelligent, and Technology Driven. 
		<br/><br/>
		I am a New York based developer and tester. 
		<br/><br/>
		Former Bioloy major who decided to adjust his career direction onto the side of technology.
		Starting with softare testing I decided to improve my developer skill due to a personal love of being able to create new things and the yearn to have a more rounded skillset.	
		
		<br/><br/>
		I have diverse set of skills from my science and technology background. 
		I personally love React and am excited to see where it goes in the future. (In fact this site is built using React!)
		<br/><br/>

		I have experience with both large and small companies.

		My goal during any project is to use my skills to solve problems and create an environment where things work as smoothly as possible, so that I and everyone I work with may better reach their goals. 

		</div>


		</div>
		</div>

		</CSSTransitionGroup>
	}

}


export default About