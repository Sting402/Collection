import React from 'react';
import Item from './Item';
class List extends React.Component{
    render(){
        let todos=this.props.data;
       
        let todoItems=todos.map(item=>{
            return <Item deleteItem={this.props.deleteItem}
             key={item.id} data={item}/>
        });
        
        return (
            <table className="table table-striped">
                <tbody>
                    {todoItems}
                </tbody>
                
            </table>
          
        );
    }
}
export default List;