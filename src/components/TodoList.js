import React from 'react';
import {observer} from 'mobx-react';
import TodoItem from './TodoItem';
class TodoList extends React.Component{

    render(){

        return(
            <section>
                <ul>
                {this.props.store.todo.map((item, index)=>{

                    return (
                        <TodoItem 
                        key={index}
                        index={index}
                        item={item}
                         store={this.props.store} />
                    )   

                    })}
                </ul>
               
            </section>
        )
    }


}

export default observer(TodoList);