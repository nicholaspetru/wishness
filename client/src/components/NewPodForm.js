import React, { Component } from 'react';

class NewPodForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Title...",
      description: "Description..."
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInput(event) {
    var value = event.target.value;
    var name = event.target.name;

    this.setState({[name]: value});
  }
  handleSubmit(e) {
    e.preventDefault()
    var
      _title = this.state.title,
      _description = this.state.description
    ;

    this.props.onNewPod(_title, _description)
    _title = ''
    _description = ''
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.title}
          onChange={this.handleInput}
          type="text"
          name="title"
          placeholder={this.state.title} required />
        <input
          value={this.state.description}
          onChange={this.handleInput}
          type="text"
          name="description"
          placeholder={this.state.description} required />
        <button>Add Pod</button>
      </form>
    )
  }
}

export default NewPodForm;
