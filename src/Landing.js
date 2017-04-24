import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router'


class Landing extends Component {
  constructor(){
    super()
    this.state ={
      projects: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3333/projects').then(response => {
      this.setState({
        projects: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Testing</h1>
        <ul>
          {this.state.projects.map((project) => {
            return ( <Link key={project.name} to={`/project/${project.id}`}>
            <li key={project.name}>{project.name}</li></Link>)
          })}
        </ul>
      </div>
    );
  }
}

export default Landing;
