import React from 'react'

const List = () => {
  return (
    <section class="container">
      <div class="heading">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" class="heading_img" />
        <h1 class="heading-title">To-Do List</h1>
      </div>
      <form class="form">
        <div>
          <label className="form_label" for="todo">Today I need to </label>
          <input type="text" class="form_input" id="todo" name="to-do" size="30" autoComplete="off" required/>
          <button class="button"><span>Submit</span></button>
        </div>
      </form>
      <div>
        <ul class="toDoList"> </ul>
      </div>
    </section>
  )
}

export default List
