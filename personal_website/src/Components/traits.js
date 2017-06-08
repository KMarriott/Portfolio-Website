import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './traits.css';

class Traits extends Component {
	constructor(){
		super();

		this.state={
			count: 0,
		}
	}


	render() {

		let traits = [
		"Web Developer",
		"Software Tester",
		"Scientist",
		"Writer",
		"Geek",
		"Making things as smooth as possible",
		"API tester",
		"Gamer",
		"Motivated",
		"Honest",
		"Creative",
		"Team player",
		"Diverse",
		"Not a chemist",
		"Knowledge Seeker",
		"Dedicated",
		"True",
		"Back-end developer",
		"Not the usual",
		"Thoughtful",
		"Learning different skills",
		"Problem Solver",
		"Hard Working",
		"Context Driven",
		"Biologist",
		"Nerdy",
		"Hard worker",
		"Emotionally Wise",
		"Self learner",
		"Analytical",
		"Patient",
		"Kind",
		"Hermit",
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

			listtraits.push(
				<div>
				{traits[this.state.count]}
				</div>
				)
			console.log(traits[this.state.count])
		}

		let listtraits =[
		<div key={traits[this.state.count]}
		className="center body main slide-enter">
		{traits[this.state.count]}
		</div>]
			
		return <div onClick={handleClick.bind(this)}>
		<h1>Khem Marriott</h1>
		{listtraits}
		</div>
	}

}


export default Traits