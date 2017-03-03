import React, { Component } from 'react';

class AddExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      reps: null
    }
  }

  render() {
    return (
      <div>
        <label>Exercise Name</label>
        <input id="name" type="text" onBlur={ this.blurName.bind(this) } />
        
        <br />
        
        <label>Reps</label>
        <input type="text" onBlur={ this.blurReps.bind(this) } />
        
        <br />
        
        <button onClick={ this.onClickAdd.bind(this) }>Add</button>
      </div>
    )
  }

  blurName(event) {
    this.setState({
      name: event.target.value,
    })
  }

  blurReps(event) {
    this.setState({
      reps: event.target.value,
    })
  }

  onClickAdd(event) {
    this.props.addHandler(this.state.name, this.state.reps)
  }
}

export default AddExercise;