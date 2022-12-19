import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock/Clock';
import Todo from './todo/Todo';

function App() {
  return (
    <div className="App">
        <Clock />
        <Todo />
    </div>
  );
}

export default App;
