import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock/Clock';
import Todo from './todo/Todo';
import Calendar from './calendar/Calendar';

function App() {
  return (
    <div className="App">
        <Clock />
        <Calendar />
        <Todo />
    </div>
  );
}

export default App;
