import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class TodoForm extends Component {
  state = { name: ''}
  
  handleChange = (e) => {
    const { name, value } = e.target 
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.name)
    this.setState({ name: ''})
  }
  render() {
    const { name } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="Todo"
        placeholder='Add a todo'
        required
        name='name'
        value={name}
        onChange={this.handleChange} />
      </Form>
    )
  }

}

export default TodoForm;