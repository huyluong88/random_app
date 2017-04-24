import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { browserHistory } from 'react-router'


class Project extends Component {
  constructor(){
    super()
    this.state ={
      project: {}
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:3333/projects/${this.props.params.id}`).then(response => {
      this.setState({
        project: response.data
      })
    })
  }
goToEdit(){
  console.log('this is working')
  browserHistory.push(`/project/${this.props.params.id}/edit`)
}
  render() {
    return (
      <div>
        <h1>{this.state.project.name} <button onClick={this.goToEdit.bind(this)}>Title</button></h1>
        <p>{moment(this.state.project.created_at).format('MM/DD/YYYY')}</p>
        <hr/>
        <h3>Members</h3>
        <ul>
          {this.state.project.members && this.state.project.members.map((member) => (
            <li>{member.name}</li>
          ))}
        </ul>
        <h3>Standups</h3>
        {this.state.project.members && this.state.project.standups.map((standup) => (
          <li>
            <p>did: {standup.did}</p>
            <p>doing: {standup.doing}</p>
            <p>impediments: {standup.impediments}</p>
          </li>
        ))}
      </div>
    );
  }
}

export default Project;
