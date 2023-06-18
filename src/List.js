import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeitem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit></FaEdit>
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeitem(id)}
              >
                <FaTrash></FaTrash>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
