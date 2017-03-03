import React, { Component } from 'react';

class ExerciseTable extends Component {
  render() {
    const { data } = this.props
    
    return (
      <table>
        <tr>
          <th>Date</th>
          <th>Exercise Name</th>
          <th>Reps</th>
        </tr>
        
        { data.map(this.renderEntry) }
      </table>
    )
  }
  
  renderEntry(entry) {
    return (
      <tr>
        <td>{ entry.date }</td>
        <td>{ entry.exercise }</td>
        <td>{ entry.reps }</td>
      </tr>
    )
  }
}

export default ExerciseTable;