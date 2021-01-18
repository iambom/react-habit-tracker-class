import React, {Component} from 'react';
import Form from './Form';
import Habit from './Habit';

class HabitContainer extends Component {
    render(){
        return(
            <>
                <Form onAdd={this.props.onAdd}/>
                <ul>
                    {
                        this.props.habits.map(habit => (
                            <Habit 
                                key={habit.id}
                                habit={habit}
                                onIncrement={this.props.onIncrement}
                                onDecrement={this.props.onDecrement}
                                onDelete={this.props.onDelete}
                            />
                        ))
                    }
                </ul>
                <button className="button button-color" onClick={this.props.onReset}>Reset All</button>
            </>
        )
    }
}

export default HabitContainer;