import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="box p-4">
          <Header />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
