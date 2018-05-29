import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class ParticipantWishlistContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      wishlist: [],
      participant: {}
    }

    this.getParticipantData = this.getParticipantData.bind(this);
  }
  componentDidMount() {
    var params = this.props.match.params;
    this.getParticipantData(params.pod_id, params.id);
  }

  getParticipantData(pod_id, participant_id) {
    var suffix = 'pods/' + pod_id + '/pod_participants/' + participant_id;
    axios.get( 'http://localhost:3001/api/v1/' + suffix)
    .then(response => {
      console.log(response)
      this.setState({
        participant: response.data.participant,
        wishlist: response.data.wishlist
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="pods-container">
        <h1>Name: {this.state.participant.name}</h1>
        <p>{this.state.participant.email}</p>


        <div className="pods-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Link</th>
                <th>Price</th>
                <th>Description</th>
                <th>Notes</th>
                <th>Collaborators</th>
              </tr>
            </thead>
            <tbody>
              {this.state.wishlist.map( wish => {
                return (
                  <tr className="single-pod" key={wish.id}>
                    <td>
                      <div>{wish.name}</div>
                    </td>
                    <td>
                      <div>{wish.email}</div>
                    </td>
                    <td>
                      <div>{wish.name}</div>
                    </td>
                    <td>
                      <div>{wish.email}</div>
                    </td>
                    <td>
                      <div>{wish.name}</div>
                    </td>
                    <td>
                      <div>{wish.email}</div>
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

export default ParticipantWishlistContainer;
