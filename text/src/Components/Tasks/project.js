import React, { Component } from 'react';
import ProjectItem from './projectItem'
import PropTypes from 'prop-types'

class project extends Component {
  render() {
    let projItems;
    if(this.props.projects){
      projItems = this.props.projects.map(project => {
        return(
          <ProjectItem project= {project} />
        )
      })
    }
    return (
      <div>
      <h3> Projects </h3>
        {projItems}
      </div>
    );
  }
}

project.propTypes = {
  projects: PropTypes.array
}

export default project;
