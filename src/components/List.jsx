import React from 'react'

const List = () => {
  return (
    <section className="container">
      <div className="heading">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" className="heading_img" />
        <h1 className="heading-title">To-Do List</h1>
      </div>
      <form className="form">
        <div>
          <label className="form_label" htmlFor="todo">Today I need to </label>
          <input type="text" className="form_input" id="todo" name="to-do" size="30" autoComplete="off" required/>
          <button className="button"><span>Submit</span></button>
        </div>
      </form>
      <div>
        <ul className="toDoList"> </ul>
      </div>
    </section>
  )
}

export default List
