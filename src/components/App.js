import React, { Component } from 'react';
import './App.css';
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;