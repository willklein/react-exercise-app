import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddExercise from './AddExercise';
import ExerciseTable from './ExerciseTable';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      exercises: [
        {
          date: 'Wednesday',
          exercise: 'Pushups',
          reps: 5
        },
        {
          date: 'Yesterday',
          exercise: 'Pushups',
          reps: 6
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <h1>Rep Tracker</h1>

        <AddExercise addHandler={ this.addHandler.bind(this) } />

        <ExerciseTable data={ this.state.exercises } title="Exercises" />
      </div>
    );
  }

  addHandler(name, reps) {
    const exercises = this.state.exercises;

    exercises.push({
      date: 'Today',
      exercise: name,
      reps
    });

    this.setState({ exercises });
  }
}

export default App;
