import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem.js';
import allCheck from './img/check-symbol.svg'

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      todoItems:[
        {title: 'Đi học', isComplete: false},
        {title: 'Đi chợ', isComplete: false},
        {title: 'Đi chơi', isComplete: false}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClicked(item){
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = this.state.todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }
  onKeyUp(event){
    let text = event.target.value;
    if(event.keyCode === 13){         //enter
      if(!text) {
        return;
      }
      text = text.trim();
      if(!text) {
        return;
      }
      
      this.setState({
        todoItems: [
          {
            title: text,
            isComplete: false
          },
          ...this.state.todoItems
        ]
      });
    } else {
      this.setState({
        newItem: text
      });
    }
  }
  onChange(event){
    this.setState({
      newItem: event.target.value
    });
  }
  render(){
    return (
      <div className="App">
      <div className="Header">
        <img src={allCheck} width="32" height="32"></img>
        <input 
          value={this.state.newItem}
          onChange={this.onChange} 
          type="text" 
          placeholder="Add a new item" 
          onKeyUp={this.onKeyUp}>
        </input>
      </div>
        {this.state.todoItems.length === 0 && "Nothing here"}
        {this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
          <TodoItem key={index} onClick={this.onItemClicked(item)} item={item}/>) }
      </div>
    );
  }
}


export default App;
