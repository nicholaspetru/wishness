import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import NewPodForm from './NewPodForm';

class PodsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      pods: []
    }
    this.addNewPod = this.addNewPod.bind(this)
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/pods.json')
    .then(response => {
      console.log(response)
      this.setState({
        pods: response.data
      })
    })
    .catch(error => console.log(error))
  }
  addNewPod(title, description) {
    axios.post( 'http://localhost:3001/api/v1/pods', { pod: {title: title, description: description} })
    .then(response => {
      console.log(response)
      var pods = [ this.state.pods, response.data ]
      this.setState({pods})
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  render() {
      return (
      <div className="pods-container">
        <h1>Pods ...</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Participants</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pods.map( pod => {
              return (
                <tr className="single-pod" key={pod.id}>
                  <td>
                    <div>{pod.title}</div>
                  </td>
                  <td>
                    <div>{pod.description}</div>
                  </td>
                  <td>
                    <a>
                      pod.participant.name
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <NewPodForm onNewPod={this.addNewPod} />
      </div>
    )
  }
}

export default PodsContainer;
