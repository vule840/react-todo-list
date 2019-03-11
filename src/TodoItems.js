import React, { Component } from 'react';
import FlipMove from "react-flip-move";

class TodoItems extends Component {

	constructor(props){
		super(props)

		this.createTasks = 	this.createTasks.bind(this);
	}
	test(){
		console.log('sdfsdfdsf')
	}

	createTasks(item) {
				return <li onClick={() => this.delete(item.key)} key={item.key}> {item.text}</li>
			}

	delete(key){
		this.props.delete(key)
	}

	yo(){
		console.log('sdfsdf')
	}
	render(){

			var todoEntries = this.props.entries;
			var listItems = todoEntries.map(this.createTasks); 

			const customEnterAnimation = {
			  from: { transform: 'scale(0.5, 1)' },
			  to:   { transform: 'scale(1, 1)' }
			};
		return(

				<ul className="theList">
					<FlipMove enterAnimation={customEnterAnimation}>
				        {listItems}
				      </FlipMove>

				</ul>

			)
	}

}

export default TodoItems;