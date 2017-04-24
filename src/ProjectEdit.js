import React, {
    Component
} from 'react';
import axios from 'axios';
import {
    browserHistory
} from 'react-router'


class ProjectEdit extends Component {
    constructor() {
        super()
        this.state = {}
    }

    editName() {
        let name = this.name.value
        let data = {
            project: {
                name: name
            }
        }
        axios.put(`http://localhost:3333/projects/${this.props.params.id}`, data).then((response) => {
            console.log(response)
            if (response.status === 200) {
                browserHistory.push(`/project/${response.data.id}`)
            } else {
                alert('something went wrong and your name did not get edit')
            }
        }).then((err) => {
            alert('something went wrong and your name did not get edit')
        })
    }
  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='enter your name'
          ref={text => this.name = text}
        />
        <button onClick={this.editName.bind(this)} >Submit </button>
      </div>
    );
  }
}

export default ProjectEdit;
