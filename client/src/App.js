import React, { Component } from 'react';
import TodoForm from './todos/TodoForm';
import TodoList from './todos/TodoList';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

// axios.httpVerb('url')
//   .then(function (response) {
//     do something
//   })
//   .catch(function (error) {
//     do something
//   })
  // .finally

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // grab our todos from our rails end
    axios.get("/api/items")
      .then( res => {
        this.setState({ todos: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addItem = (name) => {
    // add the item on rails end
    axios.post('/api/items', { name })
      .then( res => {
        // update the state on the react end
        const { todos } = this.state
        this.setState({ todos: [...todos, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }

  updateTodo = (id) => {
    // update the todo on rails end
    axios.put(`/api/items/${id}`)
      .then( res => {
          // update the todo on the react end
          const todos = this.state.todos.map( t => {
            if (t.id === id)
              return res.data;
            return t
          })
          this.setState({ todos })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteTodo = (id) => {
    // delete on the rails end
    axios.delete(`/api/items/${id}`)
      .then( res => {
          // delete the todo on the react end
          const { todos } = this.state
          this.setState({ todos: todos.filter( t => t.id !== id) })
      })
  }

  render() {
    const { todos } = this.state
    return (
      <Container>
        <TodoForm 
          addItem={this.addItem}
        />
        <TodoList 
          todos={todos}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />
      </Container>
    );
  }
}

export default App;