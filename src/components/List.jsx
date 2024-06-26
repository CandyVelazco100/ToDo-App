import React, { useState, useEffect, useRef } from 'react';
import './List.css';

const List = () => {
  const [toDoListArray, setToDoListArray] = useState([]);
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const ulRef = useRef(null);

  useEffect(() => {
    formRef.current.addEventListener('submit', handleSubmit);
    ulRef.current.addEventListener('click', handleItemClick);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = String(Date.now());
    const toDoItem = inputRef.current.value;
    addItemToDOM(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);
    inputRef.current.value = '';
  };

  const handleItemClick = (e) => {
    const id = e.target.getAttribute('data-id');
    if (!id) return;
    removeItemFromDOM(id);
    removeItemFromArray(id);
  };

  const addItemToDOM = (itemId, toDoItem) => {
    const li = document.createElement('li');
    li.setAttribute("data-id", itemId);
    li.innerText = toDoItem;
    ulRef.current.appendChild(li);
  };

  const addItemToArray = (itemId, toDoItem) => {
    setToDoListArray((prevArray) => [...prevArray, { itemId, toDoItem }]);
  };

  const removeItemFromDOM = (id) => {
    const li = ulRef.current.querySelector(`[data-id="${id}"]`);
    ulRef.current.removeChild(li);
  };

  const removeItemFromArray = (id) => {
    setToDoListArray((prevArray) => prevArray.filter((item) => item.itemId !== id));
  };

  return (
    <section className="container">
      <div className="heading">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" className="heading_img" />
        <h1 className="heading_title">To-Do List</h1>
      </div>
      <form ref={formRef} className="form">
        <div>
          <label className="form_label" htmlFor="todo">Today I need to </label>
          <input ref={inputRef} type="text" className="form_input" id="todo" name="to-do" size="30" autoComplete="off" required/>
          <button className="button"><span>Submit</span></button>
        </div>
      </form>
      <div>
        <ul ref={ulRef} className="toDoList">
        </ul>
      </div>
    </section>
  );
};

export default List;