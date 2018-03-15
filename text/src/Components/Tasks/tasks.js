import React, { Component } from 'react';
import TaskItem from './taskItem'
import PropTypes from 'prop-types'

class Task extends Component {
  render() {
    let tasks;
    if(this.props.tasks){
      console.log("In the task component");
      tasks = this.props.tasks.map(task => {
        return(
          <TaskItem key={task.title} task = {task} />
        );
      });
    }
    return (
      <div className="tasks">
        <h3>Tasks</h3>
        {tasks}
      </div>
    );
  }
}

Task.propTypes = {
  tasks: PropTypes.array
}

export default Task;
