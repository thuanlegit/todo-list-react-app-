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
    this.onItemClicked = this.onItemClicked.bind(this);  

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
  render(){
    return <div className="App">
      {this.state.todoItems.length === 0 && "Nothing here"}
      {this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
        <TodoItem key={index} onClick={this.onItemClicked(item)} item={item}/>) }
    </div>;
  }
}


export default App;
