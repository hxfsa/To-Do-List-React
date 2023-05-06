import styles from "./TaskItem.module.css";
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/solid'
import { useState } from "react";
import { CheckIcon } from '@heroicons/react/24/solid'



function TaskItem({task, toggleCheckbox, deleteTask, editTask}) {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    toggleCheckbox(task.id);
  }
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          className={styles.checkbox}
          type="checkbox"
            onChange={handleCheckbox}
            checked={isChecked}
            // name={}
            id={task.id}
        />
        <label
          htmlFor={task.id}
          className={styles.label}
        >
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          //  aria-label={`Update ${} Task`}
          onClick={()=>editTask(task.id)}
        >
          <PencilSquareIcon width={24} height={24}/>
        </button>

        <button
          className={`btn ${styles.delete}`}
          //  aria-label={`Delete ${} Task`}
          onClick={()=>deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24}/>
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
