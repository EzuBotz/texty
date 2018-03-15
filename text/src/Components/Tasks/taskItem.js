import React, { Component } from 'react';
import PropTypes from 'prop-types'

class taskItem extends Component {
  render() {
    console.log(this.props);
    return (
      <li>
        <strong>{this.props.task.title}</strong>
        <br />
        {this.props.task.category}
      </li>
    );
  }
}

taskItem.propTypes = {
  task: PropTypes.object
}

export default taskItem;
