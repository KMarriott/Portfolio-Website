import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './traits.css';

class Traits extends Component {
	constructor(){
		super();

		this.state={
			count: 0,
			language_count: 0,
			time: 0,
			traits: [
			"Web Developer",
			"Software Tester",
			"Scientist",
			"Writer",
			"Geek",
			"Mobile Application Tester",
			"Making things as smooth as possible",
			"API tester",
			"Gamer",
			"Web Application Tester",
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
			"Problem Solver",
			"Hard Working",
			"Context Driven",
			"Biologist",
			"Nerdy",
			"Automation API Tester",
			"Hard worker",
			"Emotionally Wise",
			"Self learner",
			"Analytical",
			"Patient",
			"Mobile Application Tester",
			"Kind",
			"Hermit",
			"Loyal"
			],
			languages: [
			"Javascript ES6",
			"Node.js",
			"React",
			"Express",
			"Linux",
			"HTML5 + CSS",
			"Phyton",
			"Ruby",
			"On Rails,",
			"Java",
			"Junit",
			"Selenium",
			"Mocha",
			"Chai",
			"jQuery",
			"Mustache",
			"Django",
			"Discord",
			"Google Apps",
			"Slack",
			"Skype",
			"Trello",
			"Sublime Text",
			"JIRA",
			"Photoshop"
			]
		}



	}


	timer() {
		this.setState({
			count: this.state.count+1
		})

		if(this.state.count>this.state.traits.length-1)(

			this.setState({
				count: 0
			})
			)
	}


language_timer() {

	let value = this.state.language_count+1
	if(this.state.language_count>=this.state.languages.length-1){
		value = 0
	}
	
	this.setState({
		language_count: value

	})

}

// switch(language_timer, timer){
// 	this.setState({
// 		time: this.state.time+1
// 	})
// 	console.log(this.state.time%2)
// 	if(this.state.time%2===0){
// 		this.language_timer.bind(this)
// 	}
// 	else{ this.timer.bind(this) }

// }

componentDidMount() {

	this.intervalId = setInterval(this.timer.bind(this), 10000);
	this.intervalId2 = setInterval(this.language_timer.bind(this), 10000)
}
componentWillUnmount(){
	clearInterval(this.intervalId);
	clearInterval(this.intervalId2);
}



render() {



	let traits = this.state.traits
	let languages = this.state.languages
		// this.setState({
		// 	traitslength: traits.length
		// })

		let show_traits= []


		let listtraits =[
		<div key={traits[this.state.count]}
		className=" enter-up background-text skills">
		{traits[this.state.count]}
		</div>]

		let listlanguages =[
		<div key={languages[this.state.language_count]}
		className="enter-up background-text traits">
		{languages[this.state.language_count]}
		</div>]

		return <div>
		{
			// listtraits
		}{
			// listlanguages
		}
		<h1>Khem Marriott</h1>

		
		
		
		</div>
	}

}


export default Traits