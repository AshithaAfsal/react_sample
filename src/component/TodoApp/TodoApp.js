import React, { Component } from 'react'
import "./TodoApp.css";
export default class TodoApp extends Component {
    state ={
        input:"",
        items:[],
        item:"",
        key:""
    };
    onHandleChange = (event) =>{
        this.setState({
            input:event.target.value
        });
       
    };
    storeItems = event =>{
        event.preventDefault();
        const {input} = this.state;
        // const allItems = this.state.items;
        // allItems.push (input)

        this.setState({
            // items:allItems
            // using spread operators we can use like this
            items:[...this.state.items,input],
            input:""
        });
        
    };
    deleteItem = key =>{
       // console.log(key)
    //    const allItems = this.state.items;
    //    allItems.splice(key,1);
       this.setState({
        //    items:allItems
        // advance method
        items:this.state.items.filter((data,index)=>index!==key)
       })

    }
    editItem = key =>{   
        this.setState({
            key:key
        });
        this.setState({
         item:this.state.items.filter((data,index)=>index===key)
         })
     }

    updateItem =(event)=>{
        console.log("ki")
        //  this.setState({
         //   item:event.target.value
        // });
        // const key = this.state.key
        // const items = this.state.items;
        // items.items[key] = item
        // this.setState(items);
    }

    render() {
        // if many input are there this.state.email,this.state.name...
        // to avoid this we use destructuring
        // we can avoid  this.state in value only value = {name}
        //const { input,mail,name } = this.state
        const { input ,items,item} = this.state
         console.log(items)
        return (
            <div className="todo-container">
              
               <form className="input-section" onSubmit={this.storeItems}>
               <h1>Todo App</h1>
                   <input type="text"
                   value ={input} 
                   placeholder="Enter Items" 
                   onChange={this.onHandleChange}/>
                   
               </form>
               <ul>
                  {items.map((data,index)=>(
                      <li key={index}>{data}
                      <i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i>
                      <i className="fas fa-edit" onClick={()=>this.editItem(index)}></i>
                      </li>
                  ))}

               
                 
               </ul>
               <input type="text"
                   value ={item} 
                   placeholder="change Item" 
                   onChange={this.updateItem}/>
            </div>
        )
    }
}
