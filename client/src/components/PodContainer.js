import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class PodContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      pod: {},
      participants: []
    }

    this.getParticipants = this.getParticipants.bind(this);
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    this.getParticipants(id);
  }

  getParticipants(id) {
    axios.get( 'http://localhost:3001/api/v1/pods/' + id + '/pod_participants')
    .then(response => {
      console.log(response)
      this.setState({
        participants: response.data.participants,
        pod: response.data.pod
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="pods-container">
        <h1>Pod: {this.state.pod.title}</h1>
        <p>{this.state.pod.description}</p>


        <div className="pods-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Wishlist</th>
              </tr>
            </thead>
            <tbody>
              {this.state.participants.map( participant => {
                return (
                  <tr className="single-pod" key={participant.id}>
                    <td>
                      <div>{participant.name}</div>
                    </td>
                    <td>
                      <div>{participant.email}</div>
                    </td>
                    <td>
                      <Link
                        to={
                          "/pods/" + this.props.match.params.id + '/participants/' + participant.id
                        }
                      >
                        Participant!
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default PodContainer;
