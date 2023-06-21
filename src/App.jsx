import { useEffect, useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm";

function App() {

  const localData = localStorage.getItem("My dev tasks");
  const initialValue = JSON.parse(localData);
  const [arrayOfTasks, setArrayOfTasks] = useState(initialValue || []);
  const [showEditForm, setShowEditForm] = useState(false);
  const [updatingTask, setUpdatingTask] = useState();

  const addTask = (task) => {
    setArrayOfTasks([task, ...arrayOfTasks]);
  };

  const toggleCheckbox = (id) => {
    setArrayOfTasks(
      arrayOfTasks.map((task) =>
        task.id == id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const deleteTask = (id) => {
    setArrayOfTasks(arrayOfTasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    setShowEditForm(true);
    const taskIWannaEdit = arrayOfTasks.find((task) => id == task.id);
    setUpdatingTask(taskIWannaEdit);
  };

  const modifyTask = (newName) => {
    setShowEditForm(false);
    if (newName) {
      setArrayOfTasks(
        arrayOfTasks.map((task) =>
          task.id == updatingTask.id ? { ...task, name: newName } : task
        )
      );
    }
    stopEditing();
  };

  const stopEditing = () => {
    setShowEditForm(false);
  };

    useEffect(() => {
      localStorage.setItem("My dev tasks", JSON.stringify(arrayOfTasks))
    }, [arrayOfTasks]);

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {showEditForm && (
        <EditForm
          updatingTask={updatingTask}
          modifyTask={modifyTask}
          stopEditing={stopEditing}
        />
      )}
      <CustomForm addTask={addTask} />
      <TaskList
        arrayOfTasks={arrayOfTasks}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
