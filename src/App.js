import React from 'react';
import Header from './components/Header.js';
import Todoitem from './components/Todoitem.js';
import Footer from './components/Footer.js';
import todosData from './components/todosData.js';
import './style.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  render() {
    const todoItems = this.state.todos.map(item => <Todoitem key={item.id} item={item}/>)

    return (
      <div className="todo-list">
          {todoItems}
      </div>
    )
  }
}

export default App
