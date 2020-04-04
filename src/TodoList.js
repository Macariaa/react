import React, { Component } from 'react';
import ListItem from './ListItem';
import NewItem from './NewItem';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            todoList:[
                {content:'React practice',done:true},
                {content:'game time',done:false}
              ]
        }
    }

    addNewItem=(newItemContent)=>{
        const newList=[...this.state.todoList,{content:newItemContent,done:false}]
        this.setState({
            todoList:newList
        })
    }

    changeItemTrue=(list)=>{
        const i=this.state.todoList.indexOf(list);
        let newList=this.state.todoList;
        newList[i].done=true;
        console.log(newList);
        this.setState({
            todoList:newList
        })
    }

    changeItemFalse=(list)=>{
        const i=this.state.todoList.indexOf(list);
        let newList=this.state.todoList;
        newList[i].done=false;
        console.log(newList);
        this.setState({
            todoList:newList
        })
    }
    

    render(){
        let i=0;
        
        return(
            
            <div>
                {
                    this.state.todoList.map(item=>(
                        <div>
                            <ListItem item={item}/>
                            <button onClick={this.changeItemTrue.bind(this,item)}>make it true</button>
                            <button onClick={this.changeItemFalse.bind(this,item)}>make it false</button>
                        </div>
                    ))
                }
                <NewItem addItem={this.addNewItem}/>
            </div>
        );
    }
}

export default TodoList;