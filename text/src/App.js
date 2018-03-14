import React, { Component } from 'react';
import Tasks from './Components/Tasks/tasks';
import Project from './Components/Tasks/project'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      project: [],
      task: []
    }
  }

  getTask(){
    console.log("getting the tasks")
    return [
      {
        title: 'task 1 ',
        category: 'web Design'
      },
      {
        title: 'task 2',
        category: 'mobile App'
      },
      {
        title: 'task 3',
        category: 'web Developent'
      }
    ];
  }

  getProject(){
    console.log("getting the tasks")
    this.setState({project: [
      {
        title: 'Business website',
        category: 'web Design',
        task: this.getTask()
      },
      {
        title: 'Social App',
        category: 'mobile App',
        task: this.getTask()
      },
      {
        title: 'Business shopping cart',
        category: 'web Developent',
        task: this.getTask()
      }
    ]});
  }
  componentWillMount(){
    this.getTask();
    this.getProject();
  }

  render() {
    return (
      <div className="App">
        <Project projects={this.state.project}/>
      </div>
    );
  }
}

export default App;
