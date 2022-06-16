import React from 'react';
import { Button } from 'react-bootstrap';
class Item extends React.Component{
    delete(){
        this.props.deleteItem(this.props.data.id);
    }
    render(){
        let {text,time}=this.props.data;
        return (
           <tr>
               <td>{time}<br/><br/>{text}</td>
                <td>
                    <br/>
                    <br/>
                    <Button>
                   <a onClick={this.delete.bind(this)}>删除留言</a>
                   </Button>
                </td>
           </tr>
        );
    }
}
export default Item;
