import React,{Component} from 'react';

class AddItem extends Component {
    constructor(props)
    addItem(){

    }
    render(){
        return (
            <div>
                <button onClick={this.addItem}>Add Item</button>
            </div>
        );
    }
}

export default AddItem