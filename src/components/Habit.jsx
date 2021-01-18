import React, {PureComponent} from 'react';

class Habit extends PureComponent{
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit)
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit)
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habit)
    }
    render(){
        const {name, count} = this.props.habit;
        return(
            <li>
               <span className="habit-name">{name}</span>
               <span className="habit-count">{count}</span> 
               <button className="button" onClick={this.handleIncrement}>plus</button>
               <button className="button" onClick={this.handleDecrement}>minus</button>
               <button className="button" onClick={this.handleDelete}>delete</button>
            </li>
        )
    }
}

export default Habit;
