import {extendObservable, action} from 'mobx';
import remotedev from 'mobx-remotedev/lib'
class Todo{

    constructor(){
        extendObservable(this, {
            todo:[],
            get getTodo(){
                return this.todo;
            },

            addtodo:action((newItem)=>{
                this.todo = [...this.todo, newItem]
            }) ,
           
            removetodo:action((index)=>{
               
                this.todo = [...this.todo.slice(0, index), ...this.todo.slice(index+1) ]
            }),

            edittodo:action(({index, text})=>{
                this.todo = [...this.todo.slice(0, index), text, ...this.todo.slice(index+1) ]
            })
        })
    }
}

export default remotedev(new Todo());