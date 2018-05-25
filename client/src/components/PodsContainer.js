import React, { Component } from 'react';
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
        {this.state.pods.map( pod => {
          return (
            <div className="single-pod" key={pod.id}>
              <h4>{pod.title}</h4>
              <p>{pod.description}</p>
            </div>
          )
        })}
        <NewPodForm onNewPod={this.addNewPod} />
      </div>
    )
  }
}

export default PodsContainer;
