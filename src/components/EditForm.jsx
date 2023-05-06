import { CheckIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';

function EditForm({ updatingTask, modifyTask, stopEditing }) {

const [newName, setNewName] = useState(updatingTask.name)

const closeEditForm = (e) => {
  e.preventDefault();
  modifyTask(newName);
}

useEffect(() => {
window.addEventListener("keydown", (e) => {
{  e.key == "Escape" ? stopEditing() : null
}})
}, [])

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => e.target == e.currentTarget ? stopEditing() : null}
    >
      <form className="todo" 
      onSubmit={closeEditForm}
      >
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={newName}
            // onInput={}
            onChange={(e) => setNewName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
        //   aria-label={`Confirm edited task to now read ${}`}
          type="submit"
        >
          <CheckIcon />
        </button>
      </form>
    </div>
  );
}

export default EditForm;
