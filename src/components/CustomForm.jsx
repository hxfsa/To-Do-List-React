import { useState } from "react";
import { PlusIcon } from '@heroicons/react/24/solid'


function CustomForm({  }) {
 

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          // value={}
          // onInput={}
          // onChange={}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        {/* <PlusIcon /> */}
      </button>
    </form>
  );
}

export default CustomForm;
