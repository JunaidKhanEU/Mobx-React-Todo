import React from 'react';
import {observer, inject} from 'mobx-react';
import TodoList from './TodoList';
class Todo extends React.Component{

    render(){
        return(
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    this.props.store.addtodo(this.refs.todo.value);
                    this.refs.todo.value = "";

                    }}>
                    <input type="text" ref="todo"/>
                    <button type="submit">Add todo</button>
                </form>

                <TodoList store ={this.props.store}/>
            </div>
        )
    }


}

export default inject("store")(observer(Todo));