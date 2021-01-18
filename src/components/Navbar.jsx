import React, {Component} from 'react';

class Navbar extends Component {
    render(){
        return(
            <div className="nav">
                <h1>Habit Tracker Class component</h1>
                <span className="habit-count">{this.props.totalCount}</span>
            </div>
        )
    }
}
export default Navbar;