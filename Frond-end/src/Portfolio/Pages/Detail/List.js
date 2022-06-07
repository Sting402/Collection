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
                <thead>
                    <tr>
                        <th>留言板</th>
                        <br/>
                    </tr>
                </thead>
                <tbody>
                    {todoItems}
                </tbody>
                
            </table>
          
        );
    }
}
export default List;