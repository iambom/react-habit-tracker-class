import { Component } from 'react';
import './app.css';
import React  from 'react';
import './app.css';
import HabitContainer from './components/HabitContainer';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    habits : [
        {id : 1, name : "Reading", count : 0},
        {id : 2, name : "Eating", count : 0},
        {id : 3, name : "Coding", count : 0},
    ]
  }

  handleIncrement = (arrayItem) => {
      const newone = this.state.habits.map(item => {
          if(item.id === arrayItem.id){
              return {...arrayItem, count : arrayItem.count + 1};
          }
          return item;
      })
      this.setState({habits : newone});
  }
  handleDecrement = (habit) => {
      const habits = this.state.habits.map(item => {
          if(item.id === habit.id){
              const count = habit.count - 1;
              return {...habit, count : count < 0 ? 0 : count};
          }
          return item;
      })
      this.setState({habits});
  }
  handleDelete = (habit) => {
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits});
  }
  handleAdd = (name) => {
    const habits = [...this.state.habits, {id:Date.now(), name, count:0}];
    this.setState({habits});
  }
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0){
        return {...habit, count : 0};
      }
      return habit;
    });
    this.setState({habits});
  }
  render(){
    const totalCount = this.state.habits.filter(item => item.count > 0).length;

    return (
      <>
        <Navbar 
          totalCount={totalCount}
        />
        <HabitContainer 
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App;
