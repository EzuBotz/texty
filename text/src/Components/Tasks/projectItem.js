import React, { Component } from 'react';
import Task from './tasks'
import PropTypes from 'prop-types'

class projectItem extends Component {
  render() {
    console.log(this.props);
    return (
      <li>
        <strong>{this.props.project.title}</strong>
        <br />
        {this.props.project.category}
        <Task tasks={this.props.project.task}/>
      </li>
    );
  }
}

projectItem.propTypes = {
  project: PropTypes.object,
}

export default projectItem;
