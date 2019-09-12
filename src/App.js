import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem.js';
import allCheck from './img/check-symbol.svg'
import classNames from 'classnames'

class App extends Component {
  constructor(){
    super();
    this.state = {
      quantityOnDisplay: 3,
      filterType: 'all',
      allCheck: false,
      newItem: '',
      todoItems:[
        {title: 'Đi học', isComplete: false, isDisplay: true},
        {title: 'Đi chợ', isComplete: false, isDisplay: true},
        {title: 'Đi chơi', isComplete: false, isDisplay: true}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAllCheck = this.onAllCheck.bind(this);
    this.onFilter = this.onFilter.bind(this);
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
        quantityOnDisplay: this.state.quantityOnDisplay+1,
        todoItems: [
          {
            title: text,
            isComplete: false,
            isDisplay: true
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
  onAllCheck(){
    const {allCheck} = this.state;
    const {todoItems} = this.state;
    todoItems.forEach((item)=>{item.isComplete = !allCheck});
    this.setState({
      allCheck: !allCheck,
      todoItems: todoItems
    });
  }
  onFilter(type){
    return ()=>{
      const {todoItems} = this.state;
      let count = 0;
      switch(type){
        case 'all': {
          todoItems.forEach((item)=>{
            count++;
            item.isDisplay=true;
          });
          this.setState({
            quantityOnDisplay: count,
            filterType: 'all',
            todoItems: todoItems
          });
          break;
        }
        case 'active': {
          todoItems.forEach((item)=>{
            if(!item.isComplete){
              count++;
              item.isDisplay=true;
            }else
              item.isDisplay=false;
          });
          this.setState({
            quantityOnDisplay: count,
            filterType: 'active',
            todoItems: todoItems
          });
          break;
        }
        case 'completed': {
          todoItems.forEach((item)=>{
            if(item.isComplete){
              count++;
              item.isDisplay=true;
            }else
              item.isDisplay=false;
          });
          this.setState({
            quantityOnDisplay: count,
            filterType: 'completed',
            todoItems: todoItems
          });
          break;
        }
      }
    }
  }
  render(){
    return (
      <div className="App">
        <div className="Header">
          <img 
            src={allCheck} 
            width="32" 
            height="32" 
            onClick={this.onAllCheck}
            alt="All check/uncheck"/>
          <input 
            value={this.state.newItem}
            onChange={this.onChange} 
            type="text" 
            placeholder="Add a new item" 
            onKeyUp={this.onKeyUp}/>
        </div>

          {this.state.todoItems.length === 0 && "Nothing here"}
          {this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
            <TodoItem key={index} onClick={this.onItemClicked(item)} item={item}/>) }
        <div className="Footer">
          <p>{this.state.quantityOnDisplay} items left</p>
          <ul>
            <li 
              className={classNames({'active': this.state.filterType === 'all'})} 
              onClick={this.onFilter('all')}>All</li>
            <li
              className={classNames({'active': this.state.filterType === 'active'})}  
              onClick={this.onFilter('active')}>Active</li>
            <li 
              className={classNames({'active': this.state.filterType === 'completed'})} 
              onClick={this.onFilter('completed')}>Completed</li>
          </ul>
        </div>
      </div>
    );
  }
}


export default App;
