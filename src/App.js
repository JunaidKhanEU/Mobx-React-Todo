import React from 'react';
import {observer, Provider} from 'mobx-react';
import Todo from './components/Todo';
import store from './stores/store';

class App extends React.Component{

    render(){
       
        return(
            <Provider store={store}>
               <Todo />
           </Provider>
           )
    

    }
   
}


export default observer(App);