import React, { useState } from 'react';

function TodoInput(props) {
  const [inputText, setInputText] = useState('');

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && inputText.trim()) {
      addTodo();
    }
  };

  const addTodo = () => {
    if (inputText.trim()) {
      props.addList(inputText);
      setInputText('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button
        className="add-btn"
        onClick={addTodo}
        aria-label="Add todo"
        disabled={!inputText.trim()}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
