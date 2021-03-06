import React from 'react';
import List from './List';
import Form from './Form';
import "./com.css";
class Comments extends React.Component{
    constructor(props){
    
        super(props);
        this.ids=1;
        this.state={
                todos:[]
        };
        
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }
    deleteItem(id){
        let newtodos=this.state.todos.filter((item)=>{
            return !(item.id===id)
        });
          this.setState({
            todos:newtodos
        });
    }
    addItem(value){
       this.state.todos.unshift(
            {
                id:this.ids++,
                text:value,
                time:(new Date()).toLocaleString(),
                done:0
            }
        )
        this.setState({
            todos:this.state.todos
        });
    }
    render(){
        return (
            <div className="com">
                
                <div className="panel panel-default">
                      <h1 className="text-center ">留言區</h1>
                      <hr/>
                      <br/>
                    </div>
                    <div className="panel-body">
                      <List deleteItem={this.deleteItem}
                       data={this.state.todos}/>
                      <Form addItem={this.addItem}/>
                    </div>
                </div> 
          
        );
    }
}
export default Comments;