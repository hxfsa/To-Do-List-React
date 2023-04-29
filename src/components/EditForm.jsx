
function EditForm({ }) {


  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
    //   onClick={}
    >
      <form className="todo" 
    //   onSubmit={}
      >
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            // value={}
            // onInput={}
            // onChange={}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          {/* <label htmlFor="editTask" className="label">
            Update Task
          </label> */}
        </div>
        <button
          className="btn"
        //   aria-label={`Confirm edited task to now read ${}`}
          type="submit"
        >
          {/* <CheckIcon /> */}
        </button>
      </form>
    </div>
  );
}

export default EditForm;
