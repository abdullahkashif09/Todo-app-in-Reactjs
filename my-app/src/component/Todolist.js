import React from 'react';
import PropTypes from 'prop-types';

function Todolist({ item, deleteItem }) {
  const handleDelete = () => {
    deleteItem();
  };

  return (
    <li className="list-item">
      {item}
      <span className='icons'>
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={handleDelete}
          aria-label="Delete item"
        ></i>
      </span>
    </li>
  );
}

Todolist.propTypes = {
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Todolist;
