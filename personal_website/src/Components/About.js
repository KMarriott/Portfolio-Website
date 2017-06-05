import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './About.css';

class About extends Component {
	constructor(){
		super();

		this.state={
			count: 0,
		}
	}


	render() {

		let traits = [
		"Khem Marriott",
		"Here for You",
		"Web Developer",
		"Software Tester",	
		"Geek",
		"Making things as smooth as possible",
		"API tester",
		"Mobile tester at bank",
		"Various experiences",
		"Team player",
		"Dedicated",
		"Focusing on back-end",
		"Learning different skills",
		"Problem solver",
		"Gaming nerd",
		"Hard worker",
		"Self learner",
		"Patient",
		"Kind",
		"Loyal"
		]

		let show_traits= []

		function handleClick(){

			let new_count = this.state.count++
			if(traits[new_count]===undefined){
			console.log("too much")
			this.setState({
				count: 0
			})
			}
			else
			this.setState({
				count: this.state.count++
			})

			listtraits.push(<div className="traits slide-enter">{traits[this.state.count]}</div>)
			console.log(traits[this.state.count])
		}

		let listtraits = [<div key={traits[this.state.count]} className="traits slide-enter">{traits[this.state.count]}</div>]
			
			



		return <CSSTransitionGroup
		transitionName="example"
		transitionEnterTimeout={500}
		transitionLeaveTimeout={300}>

		<div  onClick={handleClick.bind(this)} className = 'center body main'>
		<h1>{listtraits}</h1>
		</div>

		</CSSTransitionGroup>
	}

}


export default About