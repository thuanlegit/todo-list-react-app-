import React, { Component } from 'react';
import App from '../App';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component {
    render(){
        const { item, onClick } = this.props;
        return (
            <div onClick={onClick} className={classNames("todoItem", { 
                "TodoItem-complete": item.isComplete === true
            })} >
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;