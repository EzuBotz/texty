import React, { Component } from 'react';
import Tasks from './Components/Tasks/tasks'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      project: []
    }
  }

  getTask(){
    console.log("getting the tasks")
    this.setState({project: [
      {
        title: 'Business website',
        category: 'web Design'
      },
      {
        title: 'Social App',
        category: 'mobile App'
      },
      {
        title: 'Business shopping cart',
        category: 'web Developent'
      }
    ]});
  }
  componentWillMount(){
    this.getTask();
  }

  render() {
    console.log(this.state.project)
    return (
      <div className="App">
        <Tasks tasks={this.state.project}/>
      </div>
    );
  }
}

export default App;
