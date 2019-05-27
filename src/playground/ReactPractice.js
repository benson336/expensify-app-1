import React from 'react';

class Layout extends from React.Component{

constructor(){
	super();
	this.changeTitle = this.changeTitle.bind(this);
	this.state={
		title: "Ben"
	};
}

changeTitle(title){
	this.setState({title: title})
}

render(){
const name = "Welcome Ben"
setTimeout(()=>{
		this.setState({name: "Mino"})
	});

	return (
		<div>
		{this.state.title}
		<Header changeTitle={this.changeTitle} title={this.state.title} />
		<Header title={"Other"} />
		</div>
	);
}

}
==================================================================
class Header extends from React.Component{

handleChange(e){
	const title = e.target.value
	this.props.changeTitle(title)
}

render(){
//this.props.changeTitle("new title")
		return (
			<div>
			<Title title={this.props.title} />
			<input onChange={this.handleChange} />
			</div>
		)
	}
}
================================================================
class Title extends from React.Component{

	render(){
		return (
			<div>
			<h1>{this.props.title}</h1>
			</div>
		)
	}
}
