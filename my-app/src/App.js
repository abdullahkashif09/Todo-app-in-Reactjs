import React, { useState } from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import Todolist from './component/Todolist';
import PropTypes from 'prop-types';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText.trim() !== '') {
      // Create a unique id for each todo item
      const newTodo = {
        id: Date.now(), // Unique ID based on timestamp
        text: inputText,
      };
      setListTodo([...listTodo, newTodo]);
    }
  };

  const deleteListItem = (id) => {
    setListTodo(listTodo.filter(todo => todo.id !== id));
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        <ul>
          {listTodo.map((listItem) => (
            <Todolist
              key={listItem.id}
              item={listItem.text}
              deleteItem={() => deleteListItem(listItem.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

// Define PropTypes for TodoInput and Todolist components
TodoInput.propTypes = {
  addList: PropTypes.func.isRequired,
};

Todolist.propTypes = {
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default App;
