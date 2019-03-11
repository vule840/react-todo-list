import React, { Component } from 'react';
import TodoItems from './TodoItems'
import './App.css';

class TodoList extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			items: [],
			message: 'poruka',
			sayings: ""
		}
		this.myInput = React.createRef()
		this.updateMessage = this.updateMessage.bind(this)
		this.addItem = this.addItem.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.deleteItem = this.deleteItem.bind(this)
	/*	this.update = this.update.bind(this)*/
	}
	updateMessage(){
		this.setState({
			message: "Poruka se projenila"
		})
	}

	handleSubmit (e){
    e.preventDefault()
    this.setState(() => ({
      inputValue: this.testRef,
    }))
  }

 increment = () => {
 	let num = this.myInput.current.value
 	num++
 	this.myInput.current.value = num
 }
	 addItem(e){
		 if(this._inputElement.value !== ""){
		 	var newItem = {
		 		text: this._inputElement.value,
		 		key: Date.now(),
		 		name: this.props
		 	}

		 	 this.setState((prevState) => {
			 	return {
			 		items: prevState.items.concat(newItem)
			 	}
		 })

		 }
		 console.log(this.prevState)
		 this._inputElement.value = ""
		 console.log(this.state.items)
		 e.preventDefault()
	 }
	 /*update(e){
	 	e.preventDefault()
	 	this.setState({
	 		sayings:this.refs.yooo.value
	 	})
	 }*/

	 deleteItem(key){
	 	var filteredItems = this.state.items.filter(function(item){
	 		return (item.key !== key)
	 	})

	 	  this.setState({
	 	  	items: filteredItems
	 	  })
	 }

  render() {

 
    return (
    	 	
      <div className="todoListMain">
      	<div className="header">
      	
      

	      <p><input type="text" defaultValue={0} ref={this.myInput}/></p>
	      <p><button onClick={this.increment}> Dodaj</button></p>
	      <p onClick={this.updateMessage}>{this.state.message}</p>
	      <p test={this.test}>test</p>
      {/*	<form onSubmit={this.handleSubmit} action="">

      	<input ref={ ref => {
      		  console.log(ref)
            this.testRef = ref

      	}} type="text"/>
      	<button type="submit">add</button>




      	</form>
*/}

      		<form onSubmit={this.addItem} action="">
      			{/*<input placeholder="input task" type="text"/>*/}
      		<input ref={(a) => this._inputElement = a  } placeholder="input task"  type="text"/>
      			
      			<button type="submit">add</button>
      		</form>
      		    <TodoItems delete={this.deleteItem} entries={this.state.items}/>
      	</div>
      </div>
    );
  }
}

export default TodoList;
