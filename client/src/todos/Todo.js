import React from 'react';
import { Checkbox, Header, Button, Icon } from 'semantic-ui-react';

const Todo = ({ id, name, complete, updateTodo, deleteTodo }) => (
  <div style={styles.flex}>
    <div>
      <Checkbox
        defaultChecked={complete}
        onClick={ () => updateTodo(id) }
      />
      <div style={complete ? styles.complete : {} } className='center'>
        <Header>{ name }</Header>
      </div>
    </div>
    <Button
      onClick={ () => deleteTodo(id) }
      icon
      size='tiny'
      color='red'
    >
      <Icon name="trash"/>
    </Button>
  </div>
)

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
}

export default Todo