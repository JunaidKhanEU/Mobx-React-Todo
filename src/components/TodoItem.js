import React from 'react';
import {observer} from 'mobx-react';


class TodoItem extends React.Component{
    state={
        isEditing:false
    }

    updateEditing = (event)=>{
        event.stopPropagation()
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    submitEdit = (event)=>{
        
             event.preventDefault();   
            const updatedValue = {
                index: this.props.index,
                text:this.refs.newItem.value
            }
            this.props.store.edittodo(updatedValue);
            this.setState({
                isEditing:false
            })
        

    }

    render(){

        console.log(this.state.isEditing)
        return(

          <section>  {(!this.state.isEditing) ? 
         (<li>{this.props.item} 

            <button onClick={()=>{this.props.store.removetodo(this.props.index);}}> 
                Delete Todo</button>
                <button onClick={this.updateEditing}>Edit</button>

        </li>) : (<form onSubmit={this.submitEdit}>
                    <input type="text" defaultValue={this.props.item} ref="newItem"/>
                    <button type="submit">Save</button>
                </form>)}</section>

        )
    }
}

export default observer(TodoItem);