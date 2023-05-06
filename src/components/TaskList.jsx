import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

function TaskList({arrayOfTasks, toggleCheckbox, deleteTask, editTask}) {
  return <ul className={styles.tasks}>
    {arrayOfTasks.map((task) => <TaskItem key={task.id } task={task} toggleCheckbox={toggleCheckbox} deleteTask={deleteTask} editTask={editTask}/>)}
  </ul>;
}

export default TaskList;
