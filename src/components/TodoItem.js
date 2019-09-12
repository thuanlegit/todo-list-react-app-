import React, { Component } from 'react';
import App from '../App';
import './TodoItem.css';
import classNames from 'classnames';
import checkImg from '../img/not-success.svg';
import checkCompleteImg from '../img/success.svg'

class TodoItem extends Component {
    render(){
        const { item, onClick } = this.props;
        let url = checkImg;
        if(item.isComplete){
            url = checkCompleteImg
        }
        return (
            <div className={classNames("TodoItem", { 
                "TodoItem-complete": item.isComplete === true,
                "noDisplay": item.isDisplay === false
            })} >
                <img onClick={onClick} src={url} width="32" height="32" alt="Check/Uncheck"/>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;