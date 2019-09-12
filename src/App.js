import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoItems:[
        {title: 'Đi học', isComplete: false},
        {title: 'Đi chợ', isComplete: false},
        {title: 'Đi chơi', isComplete: false}
      ]
    }
    //this.onItemClicked = this.onItemClicked.bind(this);   //dùng thay cho arrow function ở event onClick

  }
  onItemClicked(key){
    let completeStatus = !this.state.todoItems[key].isComplete;
    let currentState = {...this.state};
    currentState.todoItems[key].isComplete = completeStatus;
    this.setState(currentState);
  }
  render(){
    return <div className="App">
      {this.state.todoItems.length === 0 && "Nothing here"}
      {this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
        <TodoItem key={index} onClick={()=>{this.onItemClicked(index)}} item={item}/>) }
    </div>;
  }
}


export default App;
